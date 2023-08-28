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
      required: true,
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'object',
      label: 'Image',
      name: 'image',
      required: true,
      fields: [
        {
          label: 'src',
          name: 'src',
          type: 'image',
          required: true,
        },
        {
          label: 'alt',
          name: 'alt',
          type: 'string',
          required: true,
        },
      ],
    },
  ],
};

const config = defineConfig({
  branch,
  localContentPath: process.env.TINACMS_REMOTE_ROOT_PATH,
  clientId: process.env.TINACMS_CLIENT_ID,
  token: process.env.TINACMS_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'media',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'posts',
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
        ui: {
          router: async ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        name: 'homepage',
        label: 'Homepage',
        path: 'homepage',
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
          router: async () => `/`,
        },
      },
    ],
  },
});

export default config;
