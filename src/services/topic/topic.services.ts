import { IMeta } from '../../interfaces/meta.interface'
import { ITopic } from './topic.interface'
import axios from 'axios'
import { url } from '../../constants'

type TRespTopics = {meta: IMeta, data: ITopic[]}

export const TopicServices = {
  async getAllTopics() {
    const response = await axios.get<TRespTopics>(`${url}/topics`)

    return response.data
  }
}