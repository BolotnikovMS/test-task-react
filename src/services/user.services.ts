import axios from 'axios'

import { IUser } from '../types/user.interface'
import { url } from '../constants'

export const UserServices = {
  async getAllUsers() {
    const response = await axios.get<IUser[]>(`${url}/users`)

    return response.data
  },

  async getUserById(id: number) {
    const response = await axios.get<IUser>(`${url}/users/${id}`)

    return response.data
  }
}
