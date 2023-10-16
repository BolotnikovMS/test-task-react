import { IPropsTextarea } from './textarea.interface'
import React from 'react'
import { ValidationMessage } from '../..'
import cx from 'classnames';

export const Textarea = ({
  register,
  validation,
  error,
  name,
  label,
  className,
  ...attributes
}: IPropsTextarea) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <textarea 
        {...register(name, validation)}
        id={name}
        className={cx('form__input form__textarea', className, error && 'form__input-error' )}
        aria-invalid={Boolean(error)}
        {...attributes}
      ></textarea>
      {error && <ValidationMessage children={error} />}
    </>
  )
}
