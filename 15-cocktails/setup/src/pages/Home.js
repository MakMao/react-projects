import React from "react";
import SearchForm from "../components/SearchForm";
import Cocktaillist from '../components/Cocktaillist'


const Home = () => {
    return (
        <main>
            <SearchForm />
            <Cocktaillist/>
        </main>
    )
}

export default Home