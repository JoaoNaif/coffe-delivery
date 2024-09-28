import { createContext, ReactNode, useReducer } from 'react'
import { Order, ordersReducer } from '../reducer/orders/reducer'
import {
  addNewOrderAction,
  addOneMoreAction,
  reduceOneLessAction,
  removeOrderAction,
} from '../reducer/orders/actions'

interface OrderContextType {
  orders: Order[]
  createNewOrder: (productId: string, quantity: number) => void
  addOneMore: (productId: string) => void
  reduceOneLess: (productId: string) => void
  removeOrder: (orderId: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    ordersReducer,

    {
      orders: [],
    },
  )

  const { orders } = orderState

  function createNewOrder(productId: string, quantity: number) {
    const id = String(new Date().getTime())

    const newOrder: Order = {
      id,
      productId,
      quantity,
      createdAt: new Date(),
    }

    dispatch(addNewOrderAction(newOrder))
  }

  function addOneMore(productId: string) {
    dispatch(addOneMoreAction(productId))
  }

  function reduceOneLess(productId: string) {
    dispatch(reduceOneLessAction(productId))
  }

  function removeOrder(orderId: string) {
    dispatch(removeOrderAction(orderId))
  }

  return (
    <OrderContext.Provider
      value={{ orders, createNewOrder, addOneMore, reduceOneLess, removeOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}
