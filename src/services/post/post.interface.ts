export interface IPost {
  id: number
  userId: number
  topicId: number
  slug: string
  published: boolean
  title: string
  body: string
}

export type IPostData = Omit<IPost, 'id' | 'slug' | 'userId'>