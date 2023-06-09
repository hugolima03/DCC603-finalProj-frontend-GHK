import type { Meta, StoryObj } from '@storybook/react';

import CourseDetails from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CourseDetails> = {
  title: 'CourseDetails',
  component: CourseDetails,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CourseDetails>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};