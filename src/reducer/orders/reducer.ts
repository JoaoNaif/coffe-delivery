import { ActionTypes } from './actions'

export interface Order {
  id: string
  productId: string
  quantity: number
  price: number
  createdAt: Date
}

interface OrderState {
  orders: Order[]
}

export function ordersReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER:
      const idAlreadyExist = state.orders.find(
        (item) => item.productId === action.payload.newOrder.productId,
      )

      if (idAlreadyExist) {
        return {
          ...state,
          orders: state.orders.map((order) => {
            if (order.productId === idAlreadyExist.productId) {
              return {
                ...order,
                quantity: order.quantity + action.payload.newOrder.quantity,
              }
            } else {
              return order
            }
          }),
        }
      }

      return {
        ...state,
        orders: [...state.orders, action.payload.newOrder],
      }
    case ActionTypes.ADD_ONE_MORE:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.productId === action.payload.productId) {
            return {
              ...order,
              quantity: order.quantity + 1,
            }
          } else {
            return order
          }
        }),
      }
    case ActionTypes.REDUCE_ONE_LESS:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.productId === action.payload.productId) {
            if (order.quantity <= 1) {
              return {
                ...order,
                quantity: 1,
              }
            } else {
              return {
                ...order,
                quantity: order.quantity - 1,
              }
            }
          } else {
            return order
          }
        }),
      }
    case ActionTypes.REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.id !== action.payload.orderId,
        ),
      }
    case ActionTypes.CLEAR_ALL_ORDERS:
      return {
        ...state,
        orders: [],
      }
    default:
      return state
  }
}
