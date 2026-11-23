// Engangsskript brukt 23.11.2026 for å flytte 27 nyheter fra Wix-bloggen til Sanity.
// Leser wix-nyheter.json og wix-nyheter-bilder.json (hentet fra Wix via nettleser, ikke lagret i repoet).
// Kjøres med: SANITY_TOKEN=<editor-token> node import-wix-nyheter.mjs  (tokenen skal aldri committes)

import {createClient} from '@sanity/client'
import fs from 'node:fs'
import crypto from 'node:crypto'

const client = createClient({projectId: 'dzgfs6fk', dataset: 'production', apiVersion: '2025-01-01', token: process.env.SANITY_TOKEN, useCdn: false})
const posts = JSON.parse(fs.readFileSync('wix-nyheter.json', 'utf8'))
const images = JSON.parse(fs.readFileSync('wix-nyheter-bilder.json', 'utf8'))
const key = () => crypto.randomBytes(6).toString('hex')
const ascii = (s) => s.toLowerCase().replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a').normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 96)

// 1. Kategorier
const cats = ['Styret', 'Jolle', 'Kjølbåt', 'Regatta', 'Kurs og utdanning', 'Neptun', 'Hollænderseilasen']
for (const c of cats) await client.createOrReplace({_id: 'category-' + ascii(c), _type: 'category', title: c, slug: {_type: 'slug', current: ascii(c)}})
console.log('kategorier:', cats.length)

// 2. Bilder
const assetIds = {}
for (const [id, dataUrl] of Object.entries(images)) {
  const buf = Buffer.from(dataUrl.split(',')[1], 'base64')
  const ext = /^data:image\/png/.test(dataUrl) ? 'png' : 'jpg'
  const asset = await client.assets.upload('image', buf, {filename: id.split('~')[0] + '.' + ext})
  assetIds[id] = asset._id
}
console.log('bilder lastet opp:', Object.keys(assetIds).length)

// 3. Nyheter
const toBlocks = (p) => {
  const out = []
  let skippedHero = false
  for (const b of p.blocks) {
    if (b.img) {
      if (!skippedHero && b.img === p.ogid && out.length === 0) { skippedHero = true; continue }
      if (assetIds[b.img]) out.push({_type: 'image', _key: key(), asset: {_type: 'reference', _ref: assetIds[b.img]}, alt: b.alt && !/\.(jpe?g|png)$/i.test(b.alt) ? b.alt : ''})
      continue
    }
    if (!b.kids) continue
    // del avsnitt på linjeskift
    const lines = [[]]
    for (const k of b.kids) {
      const parts = k.t.split('\n')
      parts.forEach((part, i) => { if (i > 0) lines.push([]); if (part) lines[lines.length - 1].push({...k, t: part}) })
    }
    for (const line of lines) {
      if (!line.map((k) => k.t).join('').trim()) continue
      const markDefs = []
      const children = line.map((k) => {
        const marks = []
        if (k.b) marks.push('strong')
        if (k.href) { const mk = key(); markDefs.push({_type: 'link', _key: mk, href: k.href}); marks.push(mk) }
        return {_type: 'span', _key: key(), text: k.t, marks}
      })
      const style = /^h[1-2]$/.test(b.tag) ? 'h2' : /^h[3-4]$/.test(b.tag) ? 'h3' : 'normal'
      const block = {_type: 'block', _key: key(), style, markDefs, children}
      if (b.list) { block.listItem = b.list; block.level = 1 }
      out.push(block)
    }
  }
  return out
}
const excerptOf = (p) => {
  let t = (p.description || '').replace(/\s+/g, ' ').trim()
  if (t.length <= 240) return t
  t = t.slice(0, 240)
  return t.slice(0, t.lastIndexOf(' ')) + ' …'
}
const used = new Set()
for (const p of posts) {
  let slug = ascii(p.title.trim()) || ascii(p.slug)
  if (used.has(slug)) slug = slug + '-' + p.date.slice(0, 4)
  used.add(slug)
  const doc = {
    _id: 'wix-' + ascii(p.slug),
    _type: 'post',
    title: p.title.trim(),
    slug: {_type: 'slug', current: slug},
    publishedAt: p.date,
    excerpt: excerptOf(p) || p.title.trim(),
    body: toBlocks(p),
  }
  if (p.ogid && assetIds[p.ogid]) doc.mainImage = {_type: 'image', asset: {_type: 'reference', _ref: assetIds[p.ogid]}, alt: 'Bilde til nyheten «' + p.title.trim() + '»'}
  await client.createOrReplace(doc)
  console.log('OK', p.date.slice(0, 10), slug, '·', doc.body.length, 'blokker', doc.mainImage ? '· hovedbilde' : '')
}
const count = await client.fetch('count(*[_type == "post"])')
console.log('nyheter i Sanity:', count)
