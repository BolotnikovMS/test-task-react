import { IComment } from '../types/comment.interface'
import axios from 'axios'
import { delaying } from '../helpers/delaying';
import { url } from '../constants'

export const CommentsServices = {
  async getPostComments(id: string) {
    const response = await axios.get<IComment[]>(`${url}/posts/${id}/comments`)

    await delaying(500)

    return response.data
  },
}
