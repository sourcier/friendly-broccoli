import { client } from '../tina/__generated__/client';

type Collection = 'pages' | 'blog';

export async function fetchTinaData({
  collection,
  filename,
}: {
  collection: Collection;
  filename: string;
}) {
  let data = {};
  let query = {};
  let variables = { relativePath: `${filename}.mdx` };
  try {
    const res = await client.queries[collection](variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables,
      data,
      query,
    },
  };
}

export default { fetchTinaData };
