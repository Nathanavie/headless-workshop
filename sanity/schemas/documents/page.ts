import { Browser } from 'phosphor-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: Browser,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    // TODO: Create fields to input slug and sections
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (rule) =>
        rule.custom((value) => {
          if (!value.current) return 'Slug is required'
          return Boolean(value.current.charAt(0) === '/')
            ? true
            : 'Slug must start with /'
        }),
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [
        { type: 'MainHero' },
        { type: 'CtaBanner' },
        { type: 'FeaturedItems' },
        { type: 'FeaturedText' },
        { type: 'Quote' },
        { type: 'MediaModule' },
      ],
    }),
  ],
  // TODO: BONUS! Configure the preview for this schema to display slug as the title and 'Page' as the subtitle
  preview: {
    select: {
      slug: 'slug',
    },
    prepare({ slug }) {
      return {
        title: slug.current,
        subtitle: 'Page',
      }
    },
  },
})
