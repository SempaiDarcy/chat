import { FC } from 'react'

import { Form } from 'antd'

import { Button } from '@/components/ui/button/button'
import { TextField } from '@/components/ui/textfield/textfield'
import { TypedTypography } from '@/components/ui/typography/typography'

import s from './sign-up-form.module.scss'

export const SignUpForm: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={s.signUp}>
      <div className={s.header}>
        <TypedTypography variant={'title'} level={2} style={{ margin: 0 }}>
          Регистрация
        </TypedTypography>
        <TypedTypography className={s.subTitle}>
          Для входа в чат, вам нужно зарегистрироваться
        </TypedTypography>
      </div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={s.form}
      >
        <TextField
          name="email"
          rules={[
            { required: true, message: 'Пожалуйста, введите ваш E-Mail!' },
            { type: 'email', message: 'Введите корректный E-Mail!' },
          ]}
          placeholder="E-Mail"
          size={'large'}
        />
        <TextField
          name="fullName"
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
          placeholder="Ваше имя"
          size={'large'}
        />
        <TextField
          name="password"
          rules={[
            { required: true, message: 'Пожалуйста, введите ваш пароль!' },
          ]}
          type="password"
          placeholder="Пароль"
          size={'large'}
        />
        <TextField
          name="confirmPassword"
          rules={[
            { required: true, message: 'Пожалуйста, подтвердите ваш пароль!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Пароли не совпадают!'))
              },
            }),
          ]}
          type="password"
          placeholder="Повторить пароль"
          size={'large'}
        />
        <Button type={'primary'} text={'Зарегистрироваться'} size={'large'} />
      </Form>
      <TypedTypography variant={'text'} type={'secondary'} className={s.signIn}>
        Войти в аккаунт
      </TypedTypography>
    </div>
  )
}
