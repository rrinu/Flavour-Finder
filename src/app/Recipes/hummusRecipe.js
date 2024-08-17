import React from 'react';
import './RecipeStyle.css';
import hummus from '../../features/allRecipes/img/hummus.png';

const HummusRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Hummus</h1>
        <img 
          src={hummus}
          alt="Hummus" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 20 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>1 can (15 oz) chickpeas, drained and rinsed</li>
          <li>1/4 cup tahini</li>
          <li>1/4 cup fresh lemon juice (about 1 lemon)</li>
          <li>1/4 cup extra-virgin olive oil</li>
          <li>2 cloves garlic, minced</li>
          <li>1/2 tsp ground cumin</li>
          <li>Salt to taste</li>
          <li>2-3 tbsp water (to adjust consistency)</li>
          <li>Chopped parsley and paprika for garnish (optional)</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>In a food processor, combine chickpeas, tahini, lemon juice, olive oil, garlic, and ground cumin.</li>
          <li>Process until smooth, scraping down the sides as needed. If the hummus is too thick, add water one tablespoon at a time until you reach the desired consistency.</li>
          <li>Season with salt to taste and blend again to incorporate.</li>
          <li>Transfer the hummus to a serving bowl and drizzle with additional olive oil, if desired. Garnish with chopped parsley and paprika.</li>
          <li>Serve with pita bread, vegetable sticks, or use as a spread.</li>
        </ul>
      </div>
    </div>
  );
};

export default HummusRecipe;
