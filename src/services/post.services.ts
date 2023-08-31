import { IPost } from '../interfaces'
import { PostPatternSortType } from '../types/posts.types'
import axios from 'axios'
import { delaying } from '../helpers/delaying'
import { url } from '../constants'

export const PostServices = {
  async getAllPosts(patternSort: PostPatternSortType = 'asc') {
    // const response = await axios.get<IPost[]>(`${url}/posts?_limit=10`)
    // https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc
    const qs = patternSort === 'asc' ? `?_sort=title&_order=${patternSort}` : `?_sort=title&_order=${patternSort}`
    const response = await axios.get<IPost[]>(`${url}/posts${qs}`)

    await delaying(500)

    return response.data
  },

  async getPostById(id: string) {
    const response = await axios.get<IPost>(`${url}/posts/${id}`)

    return response.data
  }
}
