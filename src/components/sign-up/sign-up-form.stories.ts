import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './sign-up-form'

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Components/Sign-Up',
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
