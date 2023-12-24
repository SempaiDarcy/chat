import { FC } from 'react'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Rule } from 'antd/lib/form'

import { Form, Input } from 'antd'

type TextFieldProps = {
  name: string
  rules: Rule[]
  type?: 'text' | 'password'
  placeholder?: string
  size?: 'large' | 'small'
  hasFeedback?: boolean
  validateStatus?: ValidateStatus
  icon?: boolean
}

export const TextField: FC<TextFieldProps> = ({
  name,
  rules,
  type = 'text',
  placeholder,
  size,
  hasFeedback,
  validateStatus,
  icon,
}) => {
  const inputElement =
    type === 'password' ? (
      <Input.Password
        placeholder={placeholder}
        size={size}
        prefix={
          icon ? <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} /> : ''
        }
      />
    ) : (
      <Input
        placeholder={placeholder}
        size={size}
        prefix={
          icon ? <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} /> : ''
        }
      />
    )

  return (
    <Form.Item
      name={name}
      rules={rules}
      hasFeedback={hasFeedback}
      validateStatus={validateStatus}
    >
      {inputElement}
    </Form.Item>
  )
}
type ValidateStatus = 'error' | 'success' | 'warning' | 'validating'
