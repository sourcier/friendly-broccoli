'use client';

import { useTina } from 'tinacms/dist/react';
import { Blocks } from '../blocks';

type PageProps = {
  query: any;
  variables: any;
  data: any;
  collection: string;
};

export function Page({ data: pData, query, variables, collection }: PageProps) {
  const {
    data: {
      [collection]: { topBlocks, body },
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

export default Page;
