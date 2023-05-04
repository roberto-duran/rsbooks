'use client'

import { IconType } from 'react-icons'

interface ButtonProps {
  label?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  circle?: boolean
  icon?: IconType
}
export default function Button ({
  label = '',
  onClick,
  disabled,
  outline,
  small,
  circle,
  icon: Icon
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      role='button'
      aria-disabled={disabled}
      className={`
        btn
        ${outline && 'btn-outline'}
        ${small && 'btn-sm'}
        ${circle && 'btn-circle'}
        `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  )
}
