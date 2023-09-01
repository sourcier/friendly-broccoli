import { Fragment } from 'react';

import { Hero } from '../hero';
import { PagesTopBlocks } from '../../tina/__generated__/types';

type BlockProps = {
  blocks: PagesTopBlocks[];
};

export function BlocksParser({ blocks = [] }: BlockProps) {
  return blocks
    ? blocks.map((block, index) => {
        switch (block.__typename) {
          case 'PagesTopBlocksHero':
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={block.__typename + index}>
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
    : null;
}

export default BlocksParser;
