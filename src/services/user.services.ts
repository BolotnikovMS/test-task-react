import { IPost, IUser } from '../interfaces'

import axios from 'axios'
import { url } from '../constants'

interface IParamsUserServices {
  page?: number
  limit?: number
}

export const UserServices = {
  async getAllUsers({ page, limit }: IParamsUserServices) {
    const response = await axios.get<IUser[]>(`${url}/users`, {
      params: { _page: page, _limit: limit }
    })

    return response
  },

  async getUserById(id: string) {
    const response = await axios.get<IUser>(`${url}/users/${id}`)

    return response.data
  },

  async getPostsByUserId(id: string) {
    const response = await axios.get<IPost[]>(`${url}/users/${id}/posts`)

    return response.data
  }
}