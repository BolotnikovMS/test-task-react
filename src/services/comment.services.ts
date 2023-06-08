import axios from 'axios'

import { IComment } from '../types/comment.interface'
import { url } from '../constants'

export const CommentsServices = {
  async getPostComments(id: number) {
    const response = await axios.get<IComment[]>(`${url}/posts/${id}/comments`)

    return response.data
  },
}
