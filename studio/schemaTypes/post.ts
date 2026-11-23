import {defineArrayMember, defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Nyhet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Adresse',
      description: 'Lages fra tittelen. Trykk «Generate». Blir til soonseilforening.no/nyheter/<adresse>.',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hovedbilde',
      description: 'Vises på forsiden og øverst i nyheten.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Bildetekst for skjermlesere (alt-tekst)',
          description: 'Beskriv kort hva bildet viser.',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Ingress',
      description: 'Kort tekst (1–2 setninger) som vises på forsiden og i nyhetsoversikten.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(250),
    }),
    defineField({
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})],
    }),
    defineField({
      name: 'body',
      title: 'Tekst',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt-tekst', type: 'string'}),
            defineField({name: 'caption', title: 'Bildetekst', type: 'string'}),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {title: 'Nyeste først', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', date: 'publishedAt', media: 'mainImage'},
    prepare({title, date, media}) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('nb-NO') : 'Ingen dato',
        media,
      }
    },
  },
})
