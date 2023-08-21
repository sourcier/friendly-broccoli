import { defineConfig } from 'tinacms';
import type { Template } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

const heroBlock: Template = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      headline: 'Lorem ipsum sit amet ullamco',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'object',
      label: 'Image',
      name: 'image',
      fields: [
        {
          label: 'src',
          name: 'src',
          type: 'image',
        },
        {
          label: 'alt',
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ],
};

const config = defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'homepage',
        label: 'Homepage',
        path: 'content/homepage',
        format: 'md',
        fields: [
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            templates: [heroBlock],
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },
});

export default config;
