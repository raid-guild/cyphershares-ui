import React, { useEffect } from 'react'

import TransactionWatcher from 'components/TransactionWatcher'
import { BuySellWidget } from 'components/BuySell'
import useTransactionWatcher from 'hooks/useTransactionWatcher'
import useBuySell from 'hooks/useBuySell'

interface BuySellWrapperProps {
  tokenId: 'index' | 'csDEFI'
}

const BuySellWrapper: React.FC<BuySellWrapperProps> = ({ tokenId }: any) => {
  const { transactionStatus } = useTransactionWatcher()
  const { onSetBuySellToken } = useBuySell()

  useEffect(() => {
    onSetBuySellToken(tokenId)
    // eslint-disable-next-line
  }, [])

  return (
    <TransactionWatcher
      transactionStatus={transactionStatus}
      startTransactionComponent={<BuySellWidget />}
    />
  )
}

export default BuySellWrapper
