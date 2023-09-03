import { fetchTinaData } from '../../../lib/tinacms';
import { BlogPost } from '../../../components/pages';
import { client } from '../../../tina/__generated__/client';

type Params = {
  filename: string;
};

type MarketingPageProps = {
  params: Params;
};

const collection = 'blog';

export const dynamicParams = false;

export default async function BlogPostPage({
  params: { filename },
}: MarketingPageProps) {
  const {
    props: { data, query, variables },
  } = await fetchTinaData({
    collection,
    filename,
  });
  return <BlogPost data={data} query={query} variables={variables} />;
}

export async function generateStaticParams(): Promise<Params[]> {
  const blogsResponse = await client.queries.blogConnection();
  return (
    blogsResponse.data.blogConnection.edges
      ?.filter((page) => page!.node!._sys.filename !== 'index')
      .map<{ filename: string }>((page) => ({
        filename: page!.node!._sys.filename,
      })) || []
  );
}
