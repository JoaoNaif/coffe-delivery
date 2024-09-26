import { Minus, Plus } from 'phosphor-react'
import { CountButtonContainer } from './styles'
import { useState } from 'react'

export function CountButton() {
  const [amount, setAmount] = useState(1)

  function addAmount() {
    setAmount((state) => state + 1)
  }

  function subAmount() {
    setAmount((state) => state - 1)
  }
  return (
    <CountButtonContainer>
      <button>
        <Minus onClick={subAmount} />
      </button>
      <span className="amount">{amount}</span>
      <button onClick={addAmount}>
        <Plus />
      </button>
    </CountButtonContainer>
  )
}
