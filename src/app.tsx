import s from '@/app.module.scss'
import { Button } from '@/components/ui/button/button'

export const App = () => {
  return (
    <div className={s.container}>
      <h1>Hello</h1>
      <Button />
    </div>
  )
}
