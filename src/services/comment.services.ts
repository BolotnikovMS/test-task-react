import axios from 'axios'

import { IComment } from '../types/comment.interface'
import { url } from '../constants'
import { delaying } from '../helpers/delaying';

export const CommentsServices = {
  async getPostComments(id: number) {
    const response = await axios.get<IComment[]>(`${url}/posts/${id}/comments`)

    await delaying(500)

    return response.data
  },
}
