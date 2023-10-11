import { IQueryParams } from '../../interfaces/qparams.interface'
import { IUser } from './user.interface'
import { TRespPosts } from '../post/post.type'
import { TRespUsers } from './user.type'
import axios from 'axios'
import { url } from '../../constants'

export const UserServices = {
  async getAllUsers({ page, size }: IQueryParams) {
    const response = await axios.get<TRespUsers>(`${url}/users`, {
      params: { page, size }
    })

    return response.data
  },

  async getUserById(id: string) {
    const response = await axios.get<IUser>(`${url}/users/${id}`)

    return response.data
  },

  async getPostsByUserId(id: string) {
    const response = await axios.get<TRespPosts>(`${url}/users/${id}/posts`)

    return response.data
  }
}