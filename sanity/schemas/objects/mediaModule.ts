import { FlagBanner } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MediaModule',
  title: 'Media Module',
  type: 'object',
  icon: FlagBanner,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'imageOnRight',
      title: 'Image On Right',
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'image',
      title: 'Image',
    }),
    defineField({
      type: 'string',
      name: 'imageAlt',
      title: 'Image Alt',
    }),
    defineField({
      type: 'boolean',
      name: 'isDark',
      title: 'Is Dark?',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Media Module',
        media,
        title,
      }
    },
  },
})
