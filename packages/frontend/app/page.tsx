import { fetchTinaData } from '../lib/tinacms';
import { Page } from '../components/pages';

export default async function HomePage() {
  const {
    props: { data, query, variables },
  } = await fetchTinaData({ collection: 'pages', filename: 'index' });
  return <Page data={data} query={query} variables={variables} />;
}
