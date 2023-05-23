import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta<typeof Main>;

export const Primary: StoryFn<typeof Main> = () => <Main />;