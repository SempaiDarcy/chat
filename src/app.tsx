import { Route, Routes } from 'react-router-dom'

import Layout from 'antd/es/layout/layout'

import { SignInForm } from '@/components/sign-in'
import { SignUpForm } from '@/components/sign-up'

import './app.css'

export const App = () => {
  return (
    <Layout className={'app'}>
      <Routes>
        <Route path={'/'} element={<SignInForm />} />
        <Route path={'/sign-up'} element={<SignUpForm />} />
      </Routes>
    </Layout>
  )
}
