import { Button as BaseButton } from 'antd'

type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
  type?: ButtonType
}
type ButtonType = 'primary' | 'text' | 'link' | 'default' | 'dashed' | undefined

export const Button = (props: ButtonProps) => {
  const { text, onClick, className, type } = props
  return (
    <BaseButton type={type} onClick={onClick} className={className}>
      {text}
    </BaseButton>
  )
}
