import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import About from "./pages/About";
import SingleCocktail from './pages/SingleCocktail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/cocktail/:id">
        <SingleCocktail/>
      </Route>
      </Switch>
    </Router>
  )
}

export default App