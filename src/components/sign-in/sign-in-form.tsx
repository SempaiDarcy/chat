import { FC } from 'react'

import { Link } from 'react-router-dom'

import { Flex, Form } from 'antd'

import { Button } from '@/components/ui/button/button'
import { TextField } from '@/components/ui/textfield/textfield'
import { TypedTypography } from '@/components/ui/typography/typography'

import s from './sign-in-form.module.scss'

export const SignInForm: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Flex vertical className={s.signIn}>
      <div className={s.header}>
        <TypedTypography variant={'title'} level={2} style={{ margin: 0 }}>
          Войти в аккаунт
        </TypedTypography>
        <TypedTypography className={s.subTitle}>
          Пожалуйста, войдите в свой аккаунт
        </TypedTypography>
      </div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={s.form}
      >
        <TextField
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          placeholder="Username"
          size={'large'}
          hasFeedback
          validateStatus="success"
          icon={true}
        />
        <TextField
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          type="password"
          placeholder="Password"
          size={'large'}
          icon={true}
        />
        <Button type={'primary'} text={'Войти в аккаунт'} size={'large'} />
      </Form>
      <Link to={'/sign-up'}>
        <TypedTypography
          variant={'text'}
          type={'secondary'}
          className={s.signUp}
        >
          Зарегистрироваться
        </TypedTypography>
      </Link>
    </Flex>
  )
}
