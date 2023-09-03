import { fetchTinaData } from '../../lib/tinacms';
import { Page } from '../../components/pages';
import { client } from '../../tina/__generated__/client';

type Params = {
  filename: string;
};

type MarketingPageProps = {
  params: Params;
};

const collection = 'pages';

export const dynamicParams = false;

export default async function MarketingPage({
  params: { filename },
}: MarketingPageProps) {
  const { data, query, variables } = await fetchTinaData({
    collection,
    filename,
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

export async function generateStaticParams(): Promise<Params[]> {
  const pagesResponse = await client.queries.pagesConnection();
  return (
    pagesResponse.data.pagesConnection.edges
      ?.filter((page) => page!.node!._sys.filename !== 'index')
      .map<{ filename: string }>((page) => ({
        filename: page!.node!._sys.filename,
      })) || []
  );
}
