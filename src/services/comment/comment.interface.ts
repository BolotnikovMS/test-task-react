import { IUser } from '../user/user.interface'

export interface IComment {
  id: number
  postId: number
  userId: number
  slug: string
  commentBody: string
  email: string
  body: string
  user: IUser
}
