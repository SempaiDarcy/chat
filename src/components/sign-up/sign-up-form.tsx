import { FC } from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { Form } from 'antd'

import { Button } from '@/components/ui/button/button'
import { TextField } from '@/components/ui/textfield/textfield'
import { TypedTypography } from '@/components/ui/typography/typography'

import s from './sign-up-form.module.scss'

export const SignUpForm: FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Введите корректный E-Mail!')
      .required('Пожалуйста, введите ваш E-Mail!'),
    fullName: Yup.string().required('Пожалуйста, введите ваше имя!'),
    password: Yup.string()
      .required('Пожалуйста, введите ваш пароль!')
      .min(8, 'Пароль должен быть не менее 8 символов'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают!')
      .required('Пожалуйста, подтвердите ваш пароль!'),
  })
  const handleSubmit = async (values: any, actions: any) => {
    console.log('Success:', values, actions)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
    }, 1000)
  }
  return (
    <Formik
      initialValues={{
        email: '',
        fullName: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <div className={s.signUp}>
          <div className={s.header}>
            <TypedTypography variant={'title'} level={2} style={{ margin: 0 }}>
              Регистрация
            </TypedTypography>
            <TypedTypography className={s.subTitle}>
              Для входа в чат, вам нужно зарегистрироваться
            </TypedTypography>
          </div>
          <Form onFinish={handleSubmit} autoComplete="off" className={s.form}>
            <TextField
              name="email"
              placeholder="E-Mail"
              size="large"
              hasFeedback
            />
            <TextField name="fullName" placeholder="Ваше имя" size="large" />
            <TextField
              name="password"
              type="password"
              placeholder="Пароль"
              hasFeedback
              size="large"
            />
            <TextField
              name="confirmPassword"
              type="password"
              placeholder="Повторить пароль"
              size="large"
            />
            <Button type="primary" text="Зарегистрироваться" />
          </Form>
          <TypedTypography variant="text" type="secondary" className={s.signIn}>
            Войти в аккаунт
          </TypedTypography>
        </div>
      )}
    </Formik>
  )
}
