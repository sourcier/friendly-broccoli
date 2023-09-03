import { fetchTinaData } from '../lib/tinacms';
import { Page } from '../components/pages';

const collection = 'pages';

export default async function HomePage() {
  const { data, query, variables } = await fetchTinaData({
    collection,
    filename: 'index',
  });

  return (
    <Page
      data={data}
      query={query}
      variables={variables}
      collection={collection}
    />
  );
}
