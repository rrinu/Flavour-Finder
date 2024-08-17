import React, { useState } from 'react';
import '../style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllRecipes  from '../features/allRecipes/AllRecipes.js';
import SearchTerm  from '../features/searchTerm/SearchTerm.js';
import FavoriteRecipes from '../features/favoritesRecipes/FavoriteRecipes.js';
import PizzaRecipe from './Recipes/PizzaRecipe.js';
import PastaaRecipe from './Recipes/PastaRecipe.js';
import BiriyaniRecipe from './Recipes/BiriyaniRecipe.js';
import MasalaDosaRecipe from './Recipes/MasalaDosaRecipe.js';
import CheeseburgerRecipe from './Recipes/burgerRecipe.js';
import ChocolateCakeRecipe from './Recipes/cakeRecipe.js';
import DumplingsRecipe from './Recipes/dumplingRecipe.js';
import ChilliChickenRecipe from './Recipes/chilliChickenRecipe.js';
import HummusRecipe from './Recipes/hummusRecipe.js';
import FriedChickenRecipe from './Recipes/friedChickenRecipe.js';
import ButterChickenRecipe from './Recipes/ButterChickenRecipe.js';
import ChickenSandwichRecipe from './Recipes/sandwichRecipe.js';
export function App(props) {
  const {state, dispatch} = props;
  const [showFavorites, setShowFavorites] = useState(false);

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  const toggleFavorites = () => {
    setShowFavorites(prevState => !prevState);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main>
            <section className='searchBar'>
              <div className='searchbar-heading'>
                <h1>Flavor Finder</h1>
                <h4>Find your Favorite Flavor Here...</h4>
                <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
              </div>
            </section>
            <div className='fav-allRecipes'>
            <section id='fav-Recipes' className={showFavorites ? 'show' : ''}>
                <h2>Favorite Recipes</h2>
                <FavoriteRecipes favoriteRecipes={visibleFavoriteRecipes} dispatch={dispatch} />
              </section>
              <hr />
              {!showFavorites && (
                <section id='allRecipes'>
                  <h2>All Recipes</h2>
                  <AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
                </section>
              )}
            </div>
            <button 
              className="toggle-favorites-btn"
              onClick={toggleFavorites}
            >
              {showFavorites ? (
                <>
                  My Favorite Recipes <span className="arrow down"></span>
                </>
              ) : (
                <>
                  My Favorite Recipes <span className="arrow up"></span>
                </>
              )}
            </button>
          </main>
        } />
        <Route path="/recipes/pizza" element={<PizzaRecipe />} />
        <Route path="/recipes/pasta" element={<PastaaRecipe />} />
        <Route path="/recipes/biriyani" element={<BiriyaniRecipe />} />
        <Route path="/recipes/MasalaDosa" element={<MasalaDosaRecipe />} />
        <Route path="/recipes/Cheeseburger" element={<CheeseburgerRecipe />} />
        <Route path="/recipes/ChoclateCake" element={<ChocolateCakeRecipe />} />
        <Route path="/recipes/Dumplings" element={<DumplingsRecipe />} />
        <Route path="/recipes/ChillyChicken" element={<ChilliChickenRecipe />} />
        <Route path="/recipes/Hummus" element={<HummusRecipe />} />
        <Route path="/recipes/FriedChicken" element={<FriedChickenRecipe />} />
        <Route path="/recipes/ButterChicken" element={<ButterChickenRecipe />} />
        <Route path="/recipes/ChickenSandwich" element={<ChickenSandwichRecipe />} />
      </Routes>
    </Router>
  );
}



function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}