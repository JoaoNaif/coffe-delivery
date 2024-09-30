import { Address } from "./reducer";

export enum Actiontypes {
    ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS'
}

export function addNewAddressAction(newAddress: Address){
    return {
        type: Actiontypes.ADD_NEW_ADDRESS,
        payload: {
            newAddress
        }
    }
}