import React from 'react';
import './RecipeStyle.css';
import butterChicken from '../../features/allRecipes/img/butter-chicken.jpeg';

const ButterChickenRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Butter Chicken</h1>
        <img 
          src={butterChicken}
          alt="Butter Chicken" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 1 hour 20 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>500g boneless chicken, cut into bite-sized pieces</li>
          <li>1 cup plain yogurt</li>
          <li>2 tbsp lemon juice</li>
          <li>1 tbsp ginger-garlic paste</li>
          <li>1 tbsp garam masala</li>
          <li>1 tsp turmeric</li>
          <li>1 tsp chili powder</li>
          <li>Salt to taste</li>
          <li>2 tbsp butter</li>
          <li>1 large onion, finely chopped</li>
          <li>2 cups tomato puree</li>
          <li>1 cup heavy cream</li>
          <li>1 tsp fenugreek leaves (optional)</li>
          <li>Fresh coriander leaves for garnish</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>In a bowl, mix the yogurt, lemon juice, ginger-garlic paste, garam masala, turmeric, chili powder, and salt. Add the chicken pieces and marinate for at least 1 hour, or overnight for better flavor.</li>
          <li>Heat butter in a large pan over medium heat. Add the chopped onions and sauté until golden brown.</li>
          <li>Add the tomato puree and cook until the oil starts to separate from the mixture.</li>
          <li>Add the marinated chicken pieces to the pan and cook until the chicken is fully cooked and tender, about 15-20 minutes.</li>
          <li>Stir in the heavy cream and fenugreek leaves (if using). Simmer for another 5 minutes until the sauce thickens.</li>
          <li>Garnish with fresh coriander leaves and serve hot with naan, rice, or your preferred side.</li>
        </ul>
      </div>
    </div>
  );
};

export default ButterChickenRecipe;
