'use client';

import { useTina } from 'tinacms/dist/react';
import { Blocks } from '../blocks';
import type { Collection } from '../../lib/tinacms';

type PageProps = {
  query: any;
  variables: any;
  data: any;
  collection: Collection;
};

export function Page({ data, query, variables, collection }: PageProps) {
  const {
    data: {
      [collection]: { topBlocks, body },
    },
  } = useTina({
    query,
    variables,
    data,
  });

  return (
    <div>
      <Blocks topBlocks={topBlocks} body={body} />
    </div>
  );
}

export default Page;
