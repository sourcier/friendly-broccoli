import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { BlocksParser } from './block-parser';

type BlocksProps = {
  topBlocks: any;
  body: any;
};

export function Blocks({ topBlocks, body }: BlocksProps) {
  return (
    <div>
      <BlocksParser blocks={topBlocks} />
      <TinaMarkdown content={body} />
    </div>
  );
}

export default Blocks;
