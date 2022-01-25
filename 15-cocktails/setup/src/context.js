import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([])
  const [searchTerm, setSearchTerm] = useState('a')
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${url}${searchTerm}`)
      const data = await res.json()
      const {drinks} = data
      if(drinks){
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item
    
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
        })
        setCocktails(newDrinks)
      }else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
        setLoading(false)
    }

  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return (
    <AppContext.Provider 
      value={{
        cocktails,
        searchTerm,
        setSearchTerm,
        loading
      }}
      >{children}</AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
