import { ButtonTypes } from './button.enum'

export interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  typeBtn?: ButtonTypes
  classBtn?: string
}