import React from 'react'
import cx from 'classnames';

interface IPropsValidationMessage {
  className?: string
  children: React.ReactNode
}

export const ValidationMessage = ({ children, className }: IPropsValidationMessage) => {
  return (
    <div className={cx('form__error', className)}>
      { children }
    </div>
  )
}
