import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { JobCd } from '../client.enum'
import WithPaypayTranable from './paypayTranable'
import { EntryTranPaypayResult } from './paypayTranable.type'

const PaypayTranable = WithPaypayTranable(Client)
const paypayTranable = new PaypayTranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTranPaypay calls API and returns response', async t => {
  const expect: EntryTranPaypayResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
  }

  sinon.stub(paypayTranable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    JobCd: JobCd.Auth,
    Amount: 1234,
  }
  const res = await paypayTranable.entryTranPaypay(args)

  t.deepEqual(res, expect)
})
