import './form.css'

import { Button, Error, FormGroup, TextInput, Textarea, ValidationMessage } from '../../../../components'
import { SubmitHandler, useController, useForm } from 'react-hook-form'

import AsyncSelect from 'react-select'
import { AxiosError } from 'axios';
import { IPostData } from '../../../../services/post/post.interface'
import { IPostFields } from './fromPost.interface'
import { PostServices } from '../../../../services/post/post.services'
import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useTopics } from '../../../../hooks/useTopics'

export const FormPost = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset, control } = useForm<IPostFields>({
    mode: 'onBlur'
  })
  const { field: {value: topicValue, onChange: topicOnChange, ...restTopicField } } = useController({name: 'topicId', control, rules: {required: {value: true, message: 'Field is required!'}}})
  const { topics, error: topicsError , isError: isErrorTopics, isLoading: isLoadingTopics } = useTopics()
  const { mutateAsync, isError: isErrorMutate, error: errorMutate } = useMutation(['create post'], (data: IPostData) => PostServices.create(data), {
    onSuccess: () => {
      navigate('/')
    },
  })

  const submit: SubmitHandler<IPostFields> = (data) => {
    mutateAsync(data)
    reset()
  }

  return (
		<>
      {isErrorMutate && <Error message={(errorMutate as AxiosError).message} />}
			<form className='from-post' onSubmit={handleSubmit(submit)}>
				<div className="form__content">
          <FormGroup>
            <AsyncSelect 
              classNamePrefix="form__custom-select"
              options={topics}
              getOptionValue={(option) => option.id.toString()}
              getOptionLabel={(option) => option.name}
              value={topicValue ? topics?.find(t => t.id === topicValue) : null}
              onChange={option => topicOnChange(option ? option.id : option)}
              isLoading={isLoadingTopics}
              isDisabled={isErrorTopics}
              isClearable
              placeholder="Select a post topic"
              {...restTopicField}
            />
            {
              errors.topicId && <ValidationMessage children={errors.topicId.message} />
            }
            {
              isErrorTopics && <ValidationMessage children={(topicsError as AxiosError)?.message} />
            }
          </FormGroup>
          <FormGroup>
            <TextInput 
              label='Title'
              register={register}
              error={errors.title?.message}
              type='text'
              name='title'
              validation={{
                required: {value: true, message: 'Field is required!'}, 
                minLength: {value: 3, message: 'The minimum length of the title field is 3 characters!'},
                maxLength: {value: 200, message: 'The maximum length of the title field is 200 characters!'}
              }}
              placeholder='Enter title post...'
            />
          </FormGroup>
          <FormGroup>
            <Textarea 
              register={register}
              validation={{
                required: {
                  value: true,
                  message: 'Field is required!',
                },
                minLength: {
                  value: 5,
                  message: 'The minimum length of the title field is 5 characters!'
                }
              }}
              error={errors.body?.message}
              label='Description'
              name='body'
              placeholder='Enter body post...'
            />
          </FormGroup>
          <FormGroup className='form__group-row form__group-center'>
              <TextInput
                register={register}
                name='published'
                label='Published'
                type='checkbox'
              />
          </FormGroup>
					<div className="form__btns">
						<Button disabled={!isValid}>Add post</Button>
					</div>
				</div>
			</form>
		</>
  )
}
