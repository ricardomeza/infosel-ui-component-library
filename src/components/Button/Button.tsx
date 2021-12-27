import React from 'react'

export interface IButton {
  label: string
}

const Button = ({ label }: IButton) => <button>{label}</button>

export default Button
