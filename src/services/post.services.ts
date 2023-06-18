import axios from 'axios'

import { IPost } from '../types/post.interface'
import { url } from '../constants'
import { delaying } from '../helpers/delaying'

export const PostServices = {
  async getAllPosts() {
    // const response = await axios.get<IPost[]>(`${url}/posts?_limit=10`)
    const response = await axios.get<IPost[]>(`${url}/posts`)

    await delaying(500)

    return response.data
  },
}
