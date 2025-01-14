import React, {useEffect} from "react";
import {useParams, Link} from 'react-router-dom'
import Loading from '../components/Loading'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const {id} = useParams()
    const [loading, setLoading] = React.useState(false)
    const [cocktail, setCocktail] = React.useState(null)

    useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const res = await fetch(`${url}${id}`)
                const data = await res.json()
                if(data.drinks){
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                      } = data.drinks[0]
                      const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                      ]
                      const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                      }
                      setCocktail(newCocktail)
                }else {
                    setCocktail(null)
                }
                setLoading(false)
            } catch (error){
                console.log(error);
                setLoading(false)
            }
        }
        getCocktail()
    }, [id]) 
    if (loading) {
        return <Loading/>
      }
    
    if(!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    }
    const {
        name,
        image,
        category,
        info,
        glass,
        instructions,
        ingredients,
      } = cocktail

    return (
        <section className="section cocktail-section">
            <h2 className="section-title">{name}</h2>
        </section>
    )
}

export default SingleCocktail