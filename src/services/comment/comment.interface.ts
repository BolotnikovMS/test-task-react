import { IUser } from '../user/user.interface'

export interface IComment {
  id: number
  post_id: number
  user_id: number
  slug: string
  comment_body: string
  email: string
  body: string
  user: IUser
}
