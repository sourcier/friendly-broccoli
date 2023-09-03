'use client';

import { useTina } from 'tinacms/dist/react';

import { Blocks } from '../blocks';

export function Page({
  data: pData,
  query,
  variables,
}: {
  query: any;
  variables: any;
  data: any;
}) {
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

export default Page;
