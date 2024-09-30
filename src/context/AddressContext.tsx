import { createContext, ReactNode, useReducer } from 'react'
import { NewAddressFormData } from '../pages/Checkout'
import { Address, addressReducer } from '../reducer/address/reducer'
import { addNewAddressAction } from '../reducer/address/actions'

interface AddressContextType {
  address: Address[]
  createNewAddress: (data: NewAddressFormData) => void
}

export const AddressContext = createContext({} as AddressContextType)

interface AddresssContextProviderProps {
  children: ReactNode
}

export function AddresssContextProvider({
  children,
}: AddresssContextProviderProps) {
  const [addressState, dispatch] = useReducer(
    addressReducer,

    {
      address: [],
    },
  )

  const { address } = addressState

  function createNewAddress(data: NewAddressFormData) {
    const id = String(new Date().getTime())

    const newAddress: Address = {
      id,
      data,
      createdAt: new Date(),
    }

    dispatch(addNewAddressAction(newAddress))
  }

  return (
    <AddressContext.Provider value={{ address, createNewAddress }}>
      {children}
    </AddressContext.Provider>
  )
}
