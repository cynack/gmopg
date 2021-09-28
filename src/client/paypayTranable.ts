import Client from '../client'
import { Constructor } from '../util'
import { EntryTranPayPayArgs, EntryTranPayPayResult } from './paypayTranable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTranPayPay(args: EntryTranPayPayArgs): Promise<EntryTranPayPayResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      return this.post<EntryTranPayPayArgs, EntryTranPayPayResult>('/payment/EntryTranPaypay.idPass', {
        ...defaultData,
        ...args,
      })
    }
  }
