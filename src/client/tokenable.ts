import Client from '../client'
import { Constructor } from '../util'
import { GetTokenArgs, GetTokenResult } from './tokenable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class Tokenable extends Base {
    public defaultTokenData(): GetTokenArgs {
      const { ShopID } = this.config

      return {
        ShopID,
        Encrypted: undefined,
        KeyHash: undefined,
      }
    }

    public async getToken(args: GetTokenArgs): Promise<GetTokenResult> {
      return this.postXwwwFormUrlencoded<GetTokenArgs, GetTokenResult>('/ext/api/credit/getToken', {
        ...this.defaultTokenData(),
        ...args,
      })
    }
  }
