import { IPost } from '../interfaces'
import { PostPatternSortType } from '../types/posts.types'
import axios from 'axios'
import { delaying } from '../helpers/delaying'
import { url } from '../constants'

interface IParamsPostsServices {
  patternSort?: string
  patternOrder?: PostPatternSortType 
  searchString?: string
}

export const PostServices = {
  async getAllPosts({ patternSort, patternOrder, searchString }: IParamsPostsServices) {
    // const response = await axios.get<IPost[]>(`${url}/posts?_limit=10`)
    // https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc
    // const qs = patternSort === 'asc' ? `?_sort=title&_order=${patternSort}` : `?_sort=title&_order=${patternSort}`
    const response = await axios.get<IPost[]>(`${url}/posts`, {
      params: { _sort: 'title', _order: patternOrder, q: searchString }
    })

    await delaying(500)

    return response.data
  },

  async getPostById(id: string) {
    const response = await axios.get<IPost>(`${url}/posts/${id}`)

    return response.data
  }
}
