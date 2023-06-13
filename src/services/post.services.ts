import axios from 'axios'

import { IPost } from '../types/post.interface'
import { url } from '../constants'

export const PostServices = {
  async getAllPosts() {
    // const response = await axios.get<IPost[]>(`${url}/posts?_limit=10`)
    const response = await axios.get<IPost[]>(`${url}/posts`)

    return response.data
  },
}
