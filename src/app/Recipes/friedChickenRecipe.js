import React from 'react';
import './RecipeStyle.css';
import friedChicken from './fc.jpg';


const FriedChickenRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Fried Chicken</h1>
        <img 
          src={friedChicken}
          alt="Fried Chicken" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 1 hour 30 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>1 whole chicken, cut into pieces</li>
          <li>2 cups buttermilk</li>
          <li>2 cups all-purpose flour</li>
          <li>1 tbsp paprika</li>
          <li>1 tbsp garlic powder</li>
          <li>1 tbsp onion powder</li>
          <li>1 tsp cayenne pepper</li>
          <li>1 tsp salt</li>
          <li>1 tsp black pepper</li>
          <li>Vegetable oil for frying</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>Place the chicken pieces in a large bowl and pour the buttermilk over them. Cover and refrigerate for at least 1 hour, or overnight for best results.</li>
          <li>In a separate bowl, combine flour, paprika, garlic powder, onion powder, cayenne pepper, salt, and black pepper.</li>
          <li>Remove the chicken from the buttermilk, allowing excess liquid to drip off. Dredge each piece in the flour mixture, pressing gently to adhere the coating.</li>
          <li>Heat vegetable oil in a large skillet or deep fryer to 350°F (175°C). The oil should be enough to cover the chicken pieces halfway.</li>
          <li>Fry the chicken pieces in batches, avoiding overcrowding the pan. Cook for about 8-10 minutes per side, or until the chicken is golden brown and has an internal temperature of 165°F (74°C).</li>
          <li>Remove the chicken from the oil and drain on paper towels. Let it rest for a few minutes before serving.</li>
          <li>Serve hot with your favorite sides and enjoy your crispy fried chicken!</li>
        </ul>
      </div>
    </div>
  );
};

export default FriedChickenRecipe;
