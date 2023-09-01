import { useTina } from 'tinacms/dist/react';

import { Blocks } from '../../components/blocks';
import { fetchTinaData } from '../../lib/tinacms';

export default function BlogPage({
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
      blog: { topBlocks, body },
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
  fetchTinaData({ collection: 'blog', filename: 'index' });
