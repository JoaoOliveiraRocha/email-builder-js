import React from 'react';

import {
  ImageAspectRatio
} from '@mui/icons-material';

import { TEditorBlock } from '../../../../editor/core';

type TButtonProps = {
  block: () => TEditorBlock;
  icon: JSX.Element;
  label: string;
};

// TODO change this.
// This shouldn't defined what a Component needs.
// The Component should export it's own settings / properties
// using an interface and this should just read those.
// Maybe add versioning to the interface(ing)
export const topperComponents: TButtonProps[] = [
  {
    label: 'Banner',
    icon: <ImageAspectRatio />,
    block: () => ({
      type: 'Banner',
      data: {
        props: {
          url: 'https://userimg-assets.customeriomail.com/images/client-env-135607/1726580146765_missing-url_01J8034GNRZDNBT8WV5HASAJXJ.jpg',
          alt: null,
          contentAlignment: 'middle',
          linkHref: null,
        },
        style: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
      },
    }),
  },
  // { label: 'ProgressBar', icon: <ProgressBarOutlined />, block: () => ({}) },
  // { label: 'LoopContainer', icon: <ViewListOutlined />, block: () => ({}) },
];
