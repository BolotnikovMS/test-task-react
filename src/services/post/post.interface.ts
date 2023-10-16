export interface IPost {
  id: number
  user_id: number
  topic_id: number
  slug: string
  published: boolean
  title: string
  body: string
}

export type IPostData = Omit<IPost, 'id' | 'slug' | 'user_id'>