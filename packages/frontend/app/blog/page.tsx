import { fetchTinaData } from '../../lib/tinacms';
import { Page } from '../../components/pages';

const collection = 'blog';

export default async function BlogPage() {
  const {
    props: { data, query, variables },
  } = await fetchTinaData({ collection, filename: 'index' });
  return (
    <Page
      data={data}
      query={query}
      variables={variables}
      collection={collection}
    />
  );
}
