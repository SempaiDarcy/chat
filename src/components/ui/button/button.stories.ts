import { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button/button'

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    type: 'primary',
  },
}
