import { Route, Routes, useLocation } from 'react-router-dom'

import Layout from 'antd/es/layout/layout'

import { SignInForm } from '@/components/sign-in'
import { SignUpForm } from '@/components/sign-up'
import { DialogsPage } from '@/pages/dialogs-page/dialogs-page'

import s from '@/styles/layout.module.scss'

export const App = () => {
  const location = useLocation()
  const isDialogPage = location.pathname === '/me'
  return (
    <Layout className={!isDialogPage ? s.antdLayout : ''}>
      <Routes>
        <Route path={'/'} element={<SignInForm />} />
        <Route path={'/sign-up'} element={<SignUpForm />} />
        <Route path={'/me'} element={<DialogsPage />} />
      </Routes>
    </Layout>
  )
}
