import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  amount: 0,
  total: 0,
  cart: cartItems,
  loading: false
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearAll = () => {
    dispatch({type: "CLEAR_ALL"})
  }

  const delItem = (id) => {
    dispatch({type: "DEL_ITEM", payload: id})
  }

  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
    console.log('hello');
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        delItem,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
