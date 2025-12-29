import React from 'react'

function Button({
  children,
  onClick,
  type = 'button',
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button onClick={onClick} className={`${bgColor} ${textColor} ${className}`} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button