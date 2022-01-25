import React from "react"

const reducer = (state, action) => {
    if(action.type === "CLEAR_ALL") {
        return {...state, cart: []}
    }
    if(action.type === "DEL_ITEM") {
        const newList = state.cart.filter((item) => item.id !== action.payload)
        return {...state, cart: newList}
    }
    if(action.type === "INCREASE") {
        const newList = state.cart.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {...state, cart: newList}
    }
    if(action.type === "DECREASE") {
        const newList = state.cart.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1}
            }
            return item
        }).filter((itempje) => itempje.amount >0)
        return {...state, cart: newList}
    }
    if(action.type === 'GET_TOTALS'){
         let {amount, total} = state.cart.reduce((cartTotal, cartItem) => {
            const {amount, price} = cartItem
            const totalPrice = amount * price

            cartTotal.amount += amount
            cartTotal.total += totalPrice
            return cartTotal
         },{
             amount: 0,
             total: 0
         })

         total = total.toFixed(2)
         return {...state, amount, total}
    }
}

export default reducer