import classNames from 'classnames'
import React from 'react'
import './Button.scss'

const Button = ({ label, size = 'default', fullWidth }: IButton) => (
  <button className={classNames('Button', size, { 'full-width': fullWidth })}>{label}</button>
)

export interface IButton {
  fullWidth?: boolean
  label: string
  size: TButton
}

export type TButton = 'default' | 'small'

export default Button
