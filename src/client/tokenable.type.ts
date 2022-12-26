export type GetTokenArgs = {
  ShopID?: string
  Encrypted?: string
  KeyHash?: string
}

export type GetTokenResult = {
  resultCode: string[]
  tokenObject: {
    token: string[]
    toBeExpiredAt: string
    maskedCardNo: string
    isSecurityCodeSet: boolean
  }
}
