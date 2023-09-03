import { defineConfig } from 'tinacms';
import type { Template, TinaField } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

const hero: Template = {
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

const topBlocks = [hero];
// todo: add bottom blocks
// const bottomBlocks = [];

const pageFields: TinaField[] = [
  {
    type: 'string',
    name: 'title',
    label: 'Title',
    isTitle: true,
    required: true,
  },
  {
    type: 'object',
    list: true,
    name: 'topBlocks',
    label: 'Top Blocks',
    templates: topBlocks,
  },
  {
    type: 'rich-text',
    name: 'body',
    label: 'Body',
    isBody: true,
  },
  // todo: add bottom blocks
  // {
  //   type: 'object',
  //   list: true,
  //   name: 'bottomBlocks',
  //   label: 'Bottom Blocks',
  //   templates: bottomBlocks,
  // },
];

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
      mediaRoot: 'media',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        path: 'pages',
        format: 'mdx',
        match: {
          include: '{index,about-us,contact-us,our-courses}',
        },
        fields: pageFields,
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: async ({
            document: {
              _sys: { filename },
            },
          }) => (filename === 'index' ? '/' : `/${filename}`),
        },
      },
      {
        name: 'blog',
        label: 'Blog',
        path: 'pages/blog',
        format: 'mdx',
        fields: pageFields,
        ui: {
          router: async ({
            document: {
              _sys: { filename },
            },
          }) => (filename === 'index' ? '/blog' : `/blog/${filename}`),
          filename: {
            readonly: true,
            slugify({ title = '' }) {
              return title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-zA-Z0-9-]/g, '');
            },
          },
        },
      },
    ],
  },
});

export default config;
