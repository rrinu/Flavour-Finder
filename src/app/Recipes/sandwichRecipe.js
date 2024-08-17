import React from 'react';
import './RecipeStyle.css';
import chickenSandwich from '../../features/allRecipes/img/sandwich.jpg';

const ChickenSandwichRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Chicken Sandwich</h1>
        <img 
          src={chickenSandwich}
          alt="Chicken Sandwich" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 30 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>2 boneless, skinless chicken breasts</li>
          <li>4 slices of your favorite bread (e.g., sourdough, whole wheat)</li>
          <li>4 lettuce leaves</li>
          <li>2 tomato slices</li>
          <li>4 slices of cheese (optional)</li>
          <li>2 tbsp mayonnaise</li>
          <li>1 tbsp mustard</li>
          <li>1 tbsp olive oil</li>
          <li>Salt and pepper to taste</li>
          <li>1 tsp paprika</li>
          <li>1 tsp garlic powder</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>Season the chicken breasts with salt, pepper, paprika, and garlic powder.</li>
          <li>Heat the olive oil in a skillet over medium heat. Add the chicken breasts and cook for about 5-7 minutes per side, or until fully cooked through and golden brown.</li>
          <li>While the chicken is cooking, toast the bread slices to your desired level of crispness.</li>
          <li>Once the chicken is cooked, let it rest for a few minutes, then slice it into thin strips or cutlets.</li>
          <li>Spread mayonnaise and mustard on one side of each bread slice.</li>
          <li>Assemble the sandwich by layering lettuce, tomato slices, chicken slices, and cheese (if using) between two bread slices.</li>
          <li>Cut the sandwich in half and serve immediately with your favorite side dish, like fries or a salad.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChickenSandwichRecipe;
