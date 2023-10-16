import { TopicServices } from '../services/topic/topic.services'
import { useQuery } from '@tanstack/react-query'

export const useTopics = () => {
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryFn: () => TopicServices.getAllTopics(),
    queryKey: ['topics'],
    staleTime: 1000 * 20,
    keepPreviousData: true,
  })

  const topics = data?.data  

  return { topics, error, isError, isLoading, isSuccess }
}