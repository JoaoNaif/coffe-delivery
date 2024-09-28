import { Minus, Plus } from 'phosphor-react'
import { CountButtonContainer } from './styles'

interface CountButtonProps {
  amount: number
  addAmount: () => void
  subAmount: () => void
}

export function CountButton({
  amount,
  addAmount,
  subAmount,
}: CountButtonProps) {
  return (
    <CountButtonContainer>
      <button onClick={subAmount} type="button">
        <Minus />
      </button>
      <span className="amount">{amount}</span>
      <button onClick={addAmount} type="button">
        <Plus />
      </button>
    </CountButtonContainer>
  )
}
