import { InputHTMLAttributes } from 'react'
import { Content } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
}

function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  ...props
}: InputProps) {
  return (
    <Content
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  )
}

export { Input }
