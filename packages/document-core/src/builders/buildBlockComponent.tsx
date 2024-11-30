import React from 'react';

import { BaseZodDictionary, BlockConfiguration, DocumentBlocksDictionary } from '../utils';

/**
 * @param blocks Main DocumentBlocksDictionary
 * @returns React component that can render a BlockConfiguration that is compatible with blocks
 */
export default function buildBlockComponent<T extends BaseZodDictionary>(blocks: DocumentBlocksDictionary<T>, document: any) {
  return function BlockComponent({ type, data }: BlockConfiguration<T>) {
    console.log(blocks);
    console.log(type);
    // console.log(blocks[type].Component);
    console.dir(data, {depth: null});

    const Component = blocks[type].Component;
    return <Component {...data} />;
  };
}
