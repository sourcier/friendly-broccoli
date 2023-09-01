import { useTina } from 'tinacms/dist/react';

import { Blocks } from '../components/blocks';
import { fetchTinaData } from '../lib/tinacms';

export default function HomePage({
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

export const getStaticProps = () =>
  fetchTinaData({ collection: 'pages', filename: 'index' });
