import axios from 'axios'

import { IPost } from '../types/post.interface'

export const PostServices = {
  url: 'https://jsonplaceholder.typicode.com',

  async getAllPosts() {
    const response = await axios.get<IPost[]>(`${this.url}/posts?_limit=10`)

    return response.data
  },
}
