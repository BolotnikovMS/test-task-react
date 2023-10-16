export interface IPropsTextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  // register: UseFormRegister<FieldValues>
  register: any
  validation?: { [key: string]: unknown }
  error?: string
  name: string
  label: string
  className?: string
}