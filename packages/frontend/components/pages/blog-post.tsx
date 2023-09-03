'use client';

import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';

function PageSection({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) {
  return (
    <>
      <h2>{heading}</h2>
      <p>{content}</p>
    </>
  );
}

const components = {
  PageSection,
};

function ContentSection({
  content,
}: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  );
}

export function BlogPost({
  query,
  variables,
  data: gspData,
}: {
  query: any;
  variables: any;
  data: any;
}) {
  const { data } = useTina({
    query,
    variables,
    data: gspData,
  });

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {data.blog.title}
        </h1>
        <ContentSection content={data.blog.body} />
      </div>
      <div className="bg-green-100 text-center">
        Lost and looking for a place to start?
        <a
          href="https://tina.io/guides/tina-cloud/getting-started/overview/"
          className="text-blue-500 underline"
        >
          {' '}
          Check out this guide
        </a>{' '}
        to see how add TinaCMS to an existing Next.js site.
      </div>
    </div>
  );
}

export default BlogPost;
