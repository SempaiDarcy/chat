import { BrowserRouter } from 'react-router-dom'

import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components/sign-in/sign-in-form'

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Components/Sign-In',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
