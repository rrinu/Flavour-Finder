import React from 'react';
import './RecipeStyle.css';
import cheeseburger from '../../features/allRecipes/img/cheese-burger.jpeg';

const CheeseburgerRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Cheeseburger</h1>
        <img 
          src={cheeseburger}
          alt="Cheeseburger" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 30 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>500g ground beef</li>
          <li>1 egg</li>
          <li>1/4 cup breadcrumbs</li>
          <li>1 tbsp Worcestershire sauce</li>
          <li>1/2 tsp garlic powder</li>
          <li>1/2 tsp onion powder</li>
          <li>Salt and pepper to taste</li>
          <li>4 slices cheddar cheese</li>
          <li>4 hamburger buns</li>
          <li>Lettuce leaves</li>
          <li>Tomato slices</li>
          <li>Pickles</li>
          <li>Ketchup and mustard (optional)</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>In a large bowl, combine the ground beef, egg, breadcrumbs, Worcestershire sauce, garlic powder, onion powder, salt, and pepper. Mix until just combined.</li>
          <li>Divide the mixture into 4 equal portions and shape them into patties.</li>
          <li>Preheat a grill or skillet over medium-high heat. Cook the patties for about 4-5 minutes on each side, or until they reach your desired level of doneness.</li>
          <li>During the last minute of cooking, place a slice of cheddar cheese on each patty and cover the grill or skillet to melt the cheese.</li>
          <li>Toast the hamburger buns on the grill or skillet until golden brown.</li>
          <li>Assemble the cheeseburgers by placing the cooked patties on the bottom half of each bun. Top with lettuce, tomato slices, pickles, and your choice of ketchup and mustard.</li>
          <li>Serve immediately and enjoy!</li>
        </ul>
      </div>
    </div>
  );
};

export default CheeseburgerRecipe;
