import { IPost } from '../types/post.interface'
import axios from 'axios'
import { delaying } from '../helpers/delaying'
import { url } from '../constants'

export const PostServices = {
  async getAllPosts() {
    // const response = await axios.get<IPost[]>(`${url}/posts?_limit=10`)
    const response = await axios.get<IPost[]>(`${url}/posts`)

    await delaying(500)

    return response.data
  },

  async getPostById(id: number) {
    const response = await axios.get<IPost>(`${url}/posts/${id}`)

    return response.data
  }
}
