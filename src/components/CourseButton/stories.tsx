import type { Meta, StoryObj } from '@storybook/react'

import CourseButton from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CourseButton> = {
  title: 'CourseButton',
  component: CourseButton
}

export default meta
type Story = StoryObj<typeof CourseButton>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    slug: 'ad',
    title: 'Aprenda Remix 💿 com Fabio Vedovelli',
    coursePhoto: 'https://source.unsplash.com/user/willianjusten/',
    end_date: new Date(),
    courseCategory: 'Programação'
  }
}
