import { IPropsTextInput } from './textInput.interface'
import React from 'react'
import { ValidationMessage } from '../..'
import cx from 'classnames';

export const TextInput: React.FC<IPropsTextInput> = ({
  register,
  validation = {},
  error,
  name,
  label,
  className,
  ...attributes
}) => { 
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name, validation)}
        id={name}
        className={cx('form__input', className, error && 'form__input-error')}
        aria-invalid={Boolean(error)}
        {...attributes}
      />
      {error && <ValidationMessage children={error} />}
    </>
  )
}
