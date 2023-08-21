import { Fragment } from 'react';
import { useTina } from 'tinacms/dist/react';

import { Hero } from '../components/hero';
import { client } from '../tina/__generated__/client';

export default function Page({
  data: pData,
  query,
  variables,
}: {
  query: any;
  variables: any;
  data: any;
}) {
  const { data } = useTina({
    query,
    variables,
    data: pData,
  });

  return (
    <div>
      {data.homepage.blocks
        ? data.homepage.blocks.map((block) => {
          switch (block.__typename) {
            case 'HomepageBlocksHero':
              return (
                <Fragment key={block.id + block.__typename}>
                  <Hero
                    title={block.headline}
                    subTitle={block.text}
                    image={block.image}
                  />
                </Fragment>
              );
            default:
              return null;
          }
        })
        : null}
    </div>
  );
}

export const getStaticProps = async () => {
  let data = {};
  let query = {};
  let variables = { relativePath: 'homepage.md' };
  try {
    const res = await client.queries.homepage(variables);
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
};
