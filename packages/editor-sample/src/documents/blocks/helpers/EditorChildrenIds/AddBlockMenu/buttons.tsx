import React from 'react';

import {
  AccountCircleOutlined,
  Crop32Outlined,
  HMobiledataOutlined,
  HorizontalRuleOutlined,
  HtmlOutlined,
  ImageOutlined,
  LibraryAddOutlined,
  NotesOutlined,
  SmartButtonOutlined,
  ViewColumnOutlined,
} from '@mui/icons-material';

import { TEditorBlock } from '../../../../editor/core';

type TButtonProps = {
  block: () => TEditorBlock;
  icon: JSX.Element;
  label: string;
};

// TODO change this.
// This shouldn't be defined what a Component needs: I understand why
// they did that way. I just think the scope of problems it solves should be
// narrower
// 
// The Component should export it's own settings / properties
// using an interface and the email builder should just read those.
// Maybe add versioning to the interface(ing)
export const Buttons: TButtonProps[] = [
  {
    label: 'Heading',
    icon: <HMobiledataOutlined />,
    block: () => ({
      type: 'Heading',
      data: {
        props: { text: 'Hello friend' },
        style: {
          padding: { top: 16, bottom: 16, left: 24, right: 24 },
        },
      },
    }),
  },
  {
    label: 'Text',
    icon: <NotesOutlined />,
    block: () => ({
      type: 'Text',
      data: {
        props: { text: 'My new text block' },
        style: {
          padding: { top: 16, bottom: 16, left: 24, right: 24 },
          fontWeight: 'normal',
        },
      },
    }),
  },

  {
    label: 'Button',
    icon: <SmartButtonOutlined />,
    block: () => ({
      type: 'Button',
      data: {
        props: {
          text: 'Button',
          url: 'https://www.usewaypoint.com',
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Image',
    icon: <ImageOutlined />,
    block: () => ({
      type: 'Image',
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
  {
    label: 'Avatar',
    icon: <AccountCircleOutlined />,
    block: () => ({
      type: 'Avatar',
      data: {
        props: {
          imageUrl: 'https://ui-avatars.com/api/?size=128',
          shape: 'circle',
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Divider',
    icon: <HorizontalRuleOutlined />,
    block: () => ({
      type: 'Divider',
      data: {
        style: { padding: { top: 16, right: 0, bottom: 16, left: 0 } },
        props: {
          lineColor: '#F0F',
        },
      },
    }),
  },
  {
    label: 'Spacer',
    icon: <Crop32Outlined />,
    block: () => ({
      type: 'Spacer',
      data: {},
    }),
  },
  {
    label: 'Html',
    icon: <HtmlOutlined />,
    block: () => ({
      type: 'Html',
      data: {
        props: { contents: '<strong>Hello world</strong>' },
        style: {
          fontSize: 16,
          textAlign: null,
          padding: { top: 16, bottom: 16, left: 24, right: 24 },
        },
      },
    }),
  },
  {
    label: 'Columns',
    icon: <ViewColumnOutlined />,
    block: () => ({
      type: 'ColumnsContainer',
      data: {
        props: {
          columnsGap: 16,
          columnsCount: 3,
          columns: [{ childrenIds: [] }, { childrenIds: [] }, { childrenIds: [] }],
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Container',
    icon: <LibraryAddOutlined />,
    block: () => ({
      type: 'Container',
      data: {
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  // { label: 'ProgressBar', icon: <ProgressBarOutlined />, block: () => ({}) },
  // { label: 'LoopContainer', icon: <ViewListOutlined />, block: () => ({}) },
];
