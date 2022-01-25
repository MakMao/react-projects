import React, {useRef} from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()

    const searchValue = useRef('')

    const setSearchValue = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text"
                    name="name"
                    id="name" 
                    ref={searchValue}
                    onChange={setSearchValue}/>
                </div>
            </form>
        </div>
    )
}

export default SearchForm