import Client from '../client'
import { Constructor } from '../util'
import {
  EntryTranPaypayArgs,
  EntryTranPaypayResult,
  ExecTranPaypayArgs,
  ExecTranPaypayResult,
} from './paypayTranable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTranPaypay(args: EntryTranPaypayArgs): Promise<EntryTranPaypayResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      return this.post<EntryTranPaypayArgs, EntryTranPaypayResult>('/payment/EntryTranPaypay.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async execTranPaypay(args: ExecTranPaypayArgs): Promise<ExecTranPaypayResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        RetURL: undefined,
      }
      return this.post<ExecTranPaypayArgs, ExecTranPaypayResult>('/payment/ExecTranPaypay.idPass', {
        ...defaultData,
        ...args,
      })
    }
  }
