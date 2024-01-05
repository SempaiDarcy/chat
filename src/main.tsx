import { BrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import { App } from '@/app'

import '@/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
