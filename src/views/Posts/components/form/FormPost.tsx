import './form.css'

import { Button, Error, FormGroup, TextInput, Textarea } from '../../../../components'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AxiosError } from 'axios'
import { IPostData } from '../../../../services/post/post.interface';
import { IPostFields } from './fromPost.interface'
import { PostServices } from '../../../../services/post/post.services'
import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useTopics } from '../../../../hooks/useTopics'

export const FormPost = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IPostFields>({
    mode: 'onBlur'
  })
  const { topics, error, isError, isLoading } = useTopics()
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
            <label>
              Topics
              <select className='form__input form__select' defaultValue='default' {...register('topic_id', {
                required: {
                  value: true,
                  message: 'Field is required!'
                },
                pattern: /^\d+$/,
              })}>
                {isLoading && <option disabled>Loading....</option>}
                {isError && <option disabled>{(error as AxiosError).message}</option>}
                {<option disabled value='default'>Select a post topic</option>}
                {
                  topics?.map(topic => (
                    <option key={topic.id} value={+topic.id}>{topic.name}</option>
                  ))
                }
              </select>
            </label>
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
          <FormGroup className='form__group-row'>
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
