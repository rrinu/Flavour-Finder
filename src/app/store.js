import { createStore, combineReducers } from 'redux';
import {favoriteRecipesReducer}  from '../features/favoritesRecipes/favoriteRecipesSlices.js';
import  {searchTermReducer}  from '../features/searchTerm/searchTermSlice.js';
import {allRecipesReducer}  from '../features/allRecipes/allRecipesSlices.js';

export const store = createStore(combineReducers({
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
}));