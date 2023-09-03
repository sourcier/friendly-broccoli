import { fetchTinaData } from '../../lib/tinacms';
import { Page } from '../../components/pages';
import { client } from '../../tina/__generated__/client';

export default async function MarketingPage({
  params: { filename },
}: {
  params: { filename: any };
}) {
  const {
    props: { data, query, variables },
  } = await fetchTinaData({
    collection: 'pages',
    filename,
  });
  return <Page data={data} query={query} variables={variables} />;
}

export async function generateStaticParams() {
  const pagesResponse = await client.queries.pagesConnection();
  return pagesResponse.data.pagesConnection.edges
    ?.filter((page) => page?.node?._sys.filename !== 'index')
    .map((page) => ({
      filename: page?.node?._sys.filename,
    }));
}
