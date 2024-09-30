import { Order } from "./reducer";

export enum ActionTypes {
    ADD_NEW_ORDER = 'ADD_NEW_ORDER',
    ADD_ONE_MORE = 'ADD_ONE_MORE',
    REDUCE_ONE_LESS = 'REDUCE_ONE_LESS',
    REMOVE_ORDER = 'REMOVE_ORDER',
    CLEAR_ALL_ORDERS = 'CLEAR_ALL_ORDERS'
}

export function addNewOrderAction(newOrder: Order) {
    return {
        type: ActionTypes.ADD_NEW_ORDER,
        payload: {
            newOrder
        }
    }
}

export function addOneMoreAction(productId: string) {
    return {
        type: ActionTypes.ADD_ONE_MORE,
        payload: {
            productId
        }
    }
}

export function reduceOneLessAction(productId: string) {
    return {
        type: ActionTypes.REDUCE_ONE_LESS,
        payload: {
            productId
        }
    }
}

export function removeOrderAction(orderId: string){
    return {
        type: ActionTypes.REMOVE_ORDER,
        payload: {
            orderId
        }
    }
}

export function clearAllOrdersAction() {
    return {
        type: ActionTypes.CLEAR_ALL_ORDERS
    }
}

