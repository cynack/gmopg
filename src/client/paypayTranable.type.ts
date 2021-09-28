import { JobCd } from '../client.enum'
import { Result, ShopArgs } from '../client.type'

export type EntryTranPayPayArgs = ShopArgs & {
  OrderID: string
  JobCd: JobCd.Auth | JobCd.Capture
  Amount: number
  Tax?: number
}

export type EntryTranPayPayResult = Result & {
  AccessID: string
  AccessPass: string
}
