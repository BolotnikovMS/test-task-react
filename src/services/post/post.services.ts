import { IPost, IPostData } from './post.interface';

import { IQueryParams } from '../../interfaces/qparams.interface'
import { TRespPosts } from './post.type'
import axios from 'axios'
import { delaying } from '../../helpers/delaying'
import { url } from '../../constants'

export const PostServices = {
  async getAllPosts({ page, size, sort = 'title', order, search }: IQueryParams) {
    // const response = await axios.get<IPost[]>(`${url}/posts?_limit=10`)
    // https://jsonplaceholder.typicode.com/posts?_sort=title&_order=asc
    // https://jsonplaceholder.typicode.com/posts?_page=11&_limit=5
    // const qs = patternSort === 'asc' ? `?_sort=title&_order=${patternSort}` : `?_sort=title&_order=${patternSort}`
    const response = await axios.get<TRespPosts>(`${url}/posts`, {
      params: { page, size, sort, order, search }
    })

    await delaying(500)

    return response.data
  },

  async getPostById(id: string) {
    const response = await axios.get<IPost>(`${url}/posts/${id}`)

    return response.data
  },

  async create(data: IPostData) {
    return axios.post<IPostData>(`${url}/posts`, data, {headers: {'Content-Type': 'application/json'}})
  }
}
