import { NewAddressFormData } from '../../pages/Checkout'
import { Actiontypes } from './actions'

export interface Address {
  id: string
  data: NewAddressFormData
  createdAt: Date
}

interface AddressState {
  address: Address[]
}

export function addressReducer(state: AddressState, action: any) {
  switch (action.type) {
    case Actiontypes.ADD_NEW_ADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload.newAddress],
      }
    default:
      return state
  }
}
