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
  }
}
