import { FC } from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { Flex, Form } from 'antd'

import { Button } from '@/components/ui/button/button'
import { TextField } from '@/components/ui/textfield/textfield'
import { TypedTypography } from '@/components/ui/typography/typography'

import s from './sign-in-form.module.scss'

export const SignInForm: FC = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Логин должен быть не менее 3 символов')
      .max(20, 'Логин должен быть не более 20 символов')
      .matches(
        /^[a-zA-Z0-9_]/,
        'Логин может содержать только буквы латинского алфавита, цифры и подчеркивания'
      )
      .required('Пожалуйста, введите ваш логин!'),
    password: Yup.string()
      .min(8, 'Пароль должен быть не менее 8 символов')
      .matches(
        /^[a-zA-Z0-9_]+$/,
        'Пароль должен содержать только буквы латинского алфавита, цифры и подчеркивания'
      )
      .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
      .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
      .required('Пожалуйста, введите ваш пароль!'),
  })
  const handleSubmit = async (values: any, actions: any) => {
    console.log('Success:', values, actions)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
    }, 1000)
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
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onFinish={handleSubmit} className={s.form}>
            <TextField
              name="username"
              placeholder="Username"
              size="large"
              hasFeedback
              icon={true}
            />
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              size="large"
              icon={true}
            />
            <Button type="primary" text="Войти в аккаунт" size="large" />
          </Form>
        )}
      </Formik>
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
