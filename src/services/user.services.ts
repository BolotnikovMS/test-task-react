import { IPost } from '../types/post.interface'
import { IUser } from '../types/user.interface'
import axios from 'axios'
import { url } from '../constants'

export const UserServices = {
  async getAllUsers() {
    const response = await axios.get<IUser[]>(`${url}/users`)

    return response.data
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