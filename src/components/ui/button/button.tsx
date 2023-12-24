import { FC } from 'react'

import { ButtonSize } from 'antd/es/button'

import { Button as BaseButton, Form } from 'antd'

type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
  type?: ButtonType
  size?: ButtonSize
}
type ButtonType = 'primary' | 'text' | 'link' | 'default' | 'dashed' | undefined

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type,
  size,
}) => {
  return (
    <Form.Item>
      <BaseButton
        type={type}
        onClick={onClick}
        className={className}
        htmlType={'submit'}
        block
        size={size}
      >
        {text}
      </BaseButton>
    </Form.Item>
  )
}
