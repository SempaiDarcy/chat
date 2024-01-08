import React from 'react'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useField } from 'formik'

import { Form, Input } from 'antd'

type ValidateStatus = 'error' | 'success' | 'warning' | 'validating'

type TextFieldProps = {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  size?: 'large' | 'small'
  hasFeedback?: boolean
  validateStatus?: ValidateStatus
  icon?: boolean
}

export const TextField: React.FC<TextFieldProps> = ({
  name,
  type = 'text',
  placeholder,
  size,
  hasFeedback,
  validateStatus,
  icon,
}) => {
  const [field, meta] = useField(name)

  // Определяем иконку в зависимости от типа поля
  const prefixIcon = icon ? (
    type === 'password' ? (
      <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
    ) : (
      <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
    )
  ) : null

  // Создаем элемент Input в зависимости от типа
  const inputElement =
    type === 'password' ? (
      <Input.Password
        {...field}
        placeholder={placeholder}
        size={size}
        prefix={prefixIcon}
      />
    ) : (
      <Input
        {...field}
        placeholder={placeholder}
        size={size}
        prefix={prefixIcon}
      />
    )

  const validationStatus = meta.touched && meta.error ? 'error' : validateStatus

  return (
    <Form.Item
      name={name}
      hasFeedback={hasFeedback}
      validateStatus={validationStatus}
      help={meta.touched && meta.error ? meta.error : ''}
    >
      {inputElement}
    </Form.Item>
  )
}
