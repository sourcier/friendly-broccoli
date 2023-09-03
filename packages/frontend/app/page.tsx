import { fetchTinaData } from '../lib/tinacms';
import HomePage from '../components/pages/home';

export default async function Page() {
  const {
    props: { data, query, variables },
  } = await fetchTinaData({ collection: 'pages', filename: 'index' });
  return <HomePage data={data} query={query} variables={variables} />;
}
