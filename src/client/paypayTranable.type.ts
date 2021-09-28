import { JobCd } from '../client.enum'
import { Result, ShopArgs } from '../client.type'

export type EntryTranPaypayArgs = ShopArgs & {
  OrderID: string
  JobCd: JobCd
  Amount: number
  Tax?: number
}

export type EntryTranPaypayResult = Result & {
  AccessID: string
  AccessPass: string
}
