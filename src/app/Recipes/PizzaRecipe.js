import React from 'react';
import './RecipeStyle.css';
import pizza from './pizza.jpg'

const PizzaRecipe = () => {
  return (
    <div className="recipe-detail-bg">
        <div className="recipe-detail">
      <h1>Pizza Margherita</h1>
      <img 
        src={pizza}
        alt="Pizza Margherita" 
        className="recipe-image" 
      />
      <p><strong>Time:</strong> 30 minutes</p>
      <h2>Ingredients</h2>
      <ul>
        <li>1 pizza dough</li>
        <li>1/2 cup tomato sauce</li>
        <li>200g mozzarella cheese, sliced</li>
        <li>Fresh basil leaves</li>
        <li>2 tbsp olive oil</li>
        <li>Salt and pepper to taste</li>
      </ul>
      <h2>Instructions</h2>
      <ul>
        <li>Preheat your oven to 220°C (425°F).</li> 
        <li>Roll out the pizza dough on a floured surface to your desired thickness.</li> 
        <li>Spread the tomato sauce evenly over the dough, leaving a small border around the edges.</li> 
        <li>Arrange the mozzarella slices on top of the sauce. Drizzle with olive oil and season with salt and pepper.</li>
        <li>Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly.</li>
        <li>Top with fresh basil leaves before serving.</li>
        </ul>
    </div>
    </div>
  );
};

export default PizzaRecipe;
