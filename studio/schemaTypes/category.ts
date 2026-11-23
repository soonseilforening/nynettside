import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Adresse',
      type: 'slug',
      options: {source: 'title', maxLength: 64},
      validation: (rule) => rule.required(),
    }),
  ],
})
