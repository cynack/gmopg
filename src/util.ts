import { RSA_PKCS1_PADDING } from 'constants'
import { createHash, publicEncrypt } from 'crypto'

export function generateID(key: string): string {
  return `${key}-${createHash('md5').update(`${key}-${new Date().toISOString()}`).digest('hex')}`
}

export function createEncrypted(
  key: string,
  card: { cardNo: string; expire: string; securityCode?: string; holderName?: string; tokenNumber?: number }
): string {
  return publicEncrypt(
    { key: `-----BEGIN PUBLIC KEY-----\n${key}\n-----END PUBLIC KEY-----`, padding: RSA_PKCS1_PADDING },
    Buffer.from(JSON.stringify(card))
  ).toString('base64')
}

export type Constructor<T> = new (...args: any[]) => T
