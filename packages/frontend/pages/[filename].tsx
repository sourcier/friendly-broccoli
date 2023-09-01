import { ParsedUrlQuery } from 'querystring';
import { useTina } from 'tinacms/dist/react';
import type { GetStaticProps } from 'next';

import { Blocks } from '../components/blocks';
import { fetchTinaData } from '../lib/tinacms';
import { client } from '../tina/__generated__/client';
import type { PagesQuery } from '../tina/__generated__/types';

type PageProps = {
  data: PagesQuery;
  query: string;
  variables: {
    relativePath: string;
  };
};

export default function Page({ data: pData, query, variables }: PageProps) {
  const {
    data: {
      pages: { topBlocks, body },
    },
  } = useTina({
    query,
    variables,
    data: pData,
  });

  return (
    <div>
      <Blocks topBlocks={topBlocks} body={body} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { filename } = context.params as ParsedUrlQuery & { filename: string };
  return fetchTinaData({ collection: 'pages', filename });
};

export const getStaticPaths = async () => {
  const blogResponse = await client.queries.pagesConnection();
  const blogs = blogResponse.data.pagesConnection.edges?.map((page) => ({
    params: {
      filename: page?.node?._sys.filename,
    },
  }));

  return {
    paths: blogs,
    fallback: false,
  };
};
