import { TOrderSort } from '../types/order.types'

export interface IQueryParams {
  page?: number
  size?: number
  search?: string
  sort?: string
  order?: TOrderSort
}