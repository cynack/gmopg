import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { AccountStatus, AccountType, TransferStatus } from '../client.enum'
import WithVirtualaccountTranable from './virtualaccountTranable'
import {
  AssignVirtualaccountResult,
  EntryTranVirtualaccountResult,
  ExecTranVirtualaccountResult,
  FreeVirtualaccountResult,
  InquiryVirtualaccountTransferResult,
  ListVirtualaccountResult,
} from './virtualaccountTranable.type'

const VirtualaccountTranable = WithVirtualaccountTranable(Client)
const virtualaccountTranable = new VirtualaccountTranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTranVirtualaccount calls API and returns response', async t => {
  const expect: EntryTranVirtualaccountResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
  }

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    Amount: 1234,
  }
  const res = await virtualaccountTranable.entryTranVirtualaccount(args)

  t.deepEqual(res, expect)
})

test('.execTranVirtualaccount calls API and returns response', async t => {
  const expect: ExecTranVirtualaccountResult = {
    AccessID: 'accessid',
    BankCode: 'bankcode',
    BankName: 'bankname',
    BranchCode: 'branchcode',
    BranchName: 'branchname',
    AccountType: AccountType.Savings,
    AccountNumber: 'accountnumber',
    AvailableDate: 'yyyyMMdd',
    TradeCode: 'tradecode',
  }

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    TradeDays: 5,
  }
  const res = await virtualaccountTranable.execTranVirtualaccount(args)

  t.deepEqual(res, expect)
})

test('.execTranVirtualaccount calls API and returns response with trade data', async t => {
  const expect: ExecTranVirtualaccountResult = {
    AccessID: 'accessid',
    BankCode: 'bankcode',
    BankName: 'bankname',
    BranchCode: 'branchcode',
    BranchName: 'branchname',
    AccountType: AccountType.Savings,
    AccountNumber: 'accountnumber',
    AvailableDate: 'yyyyMMdd',
    TradeCode: 'tradecode',
  }

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    TradeDays: 5,
    TradeReason: 'tradeReason',
    TradeClientName: 'tradeClientName',
  }
  const res = await virtualaccountTranable.execTranVirtualaccount(args)

  t.deepEqual(res, expect)
})

test('.assignVirtualaccount calls API and returns response', async t => {
  const expect: AssignVirtualaccountResult = {
    ReserveID: 'reserveid',
    BankCode: 'bankcode',
    BankName: 'bankname',
    BranchCode: 'branchcode',
    BranchName: 'branchname',
    AccountType: AccountType.Savings,
    AccountNumber: 'accountnumber',
  }

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    ReserveID: 'reserveid',
  }
  const res = await virtualaccountTranable.assignVirtualaccount(args)

  t.deepEqual(res, expect)
})

test('.freeVirtualaccount calls API and returns response', async t => {
  const expect: FreeVirtualaccountResult = {
    ReserveID: 'reserveid',
    BankCode: 'bankcode',
    BankName: 'bankname',
    BranchCode: 'branchcode',
    BranchName: 'branchname',
    AccountType: AccountType.Savings,
    AccountNumber: 'accountnumber',
  }

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    ReserveID: 'reserveid',
  }
  const res = await virtualaccountTranable.freeVirtualaccount(args)

  t.deepEqual(res, expect)
})

test('.listVirtualaccount calls API and returns response', async t => {
  const expect: ListVirtualaccountResult[] = [
    {
      ReserveID: 'reserveid',
      BankCode: 'bankcode',
      BranchCode: 'branchcode',
      AccountType: AccountType.Savings,
      AccountNumber: 'accountnumber',
      AccountStatus: AccountStatus.Assigned,
    },
  ]

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
  }
  const res = await virtualaccountTranable.listVirtualaccount(args)

  t.deepEqual(res, expect)
})

test('.inquiryVirtualaccountTransfer calls API and returns response', async t => {
  const expect: InquiryVirtualaccountTransferResult[] = [
    {
      InquiryNumber: 'inquerynumber',
      SettlementDate: 'yyyyMMdd',
      SettlementAmount: 1234,
      TradeClientName: 'tradeclientname',
      TradeSummary: 'tradesummary',
      TransferStatus: TransferStatus.RelatedAssign,
    },
  ]

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
  }
  const res = await virtualaccountTranable.inquiryVirtualaccountTransfer(args)

  t.deepEqual(res, expect)
})
