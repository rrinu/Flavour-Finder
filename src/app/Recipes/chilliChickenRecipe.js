import React from 'react';
import './RecipeStyle.css';
import chilliChicken from './cc.jpg';

const ChilliChickenRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Chilli Chicken</h1>
        <img 
          src={chilliChicken}
          alt="Chilli Chicken" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 45 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>For the Chicken Marinade:
            <ul>
              <li>500g boneless chicken, cut into bite-sized pieces</li>
              <li>2 tbsp soy sauce</li>
              <li>1 tbsp rice vinegar</li>
              <li>1 tbsp ginger-garlic paste</li>
              <li>1/2 tsp black pepper</li>
              <li>1/2 tsp salt</li>
              <li>2 tbsp cornstarch</li>
            </ul>
          </li>
          <li>For the Sauce:
            <ul>
              <li>2 tbsp vegetable oil</li>
              <li>1 onion, chopped</li>
              <li>2-3 green chilies, sliced</li>
              <li>1 red bell pepper, sliced</li>
              <li>1 green bell pepper, sliced</li>
              <li>2 cloves garlic, minced</li>
              <li>1 tbsp soy sauce</li>
              <li>1 tbsp hoisin sauce</li>
              <li>1 tbsp oyster sauce</li>
              <li>1 tbsp rice vinegar</li>
              <li>1 tsp sugar</li>
              <li>1/2 cup chicken broth</li>
              <li>1 tsp cornstarch mixed with 2 tbsp water (for thickening)</li>
              <li>Fresh coriander leaves for garnish (optional)</li>
            </ul>
          </li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>In a bowl, combine the chicken pieces with soy sauce, rice vinegar, ginger-garlic paste, black pepper, salt, and cornstarch. Mix well and marinate for at least 30 minutes.</li>
          <li>Heat oil in a large pan or wok over medium-high heat. Add the marinated chicken and stir-fry until cooked through and golden brown. Remove the chicken from the pan and set aside.</li>
          <li>In the same pan, add a bit more oil if needed. Sauté onions, green chilies, and bell peppers until they start to soften.</li>
          <li>Add the garlic and cook for an additional minute. Stir in soy sauce, hoisin sauce, oyster sauce, rice vinegar, sugar, and chicken broth. Bring the sauce to a simmer.</li>
          <li>Return the cooked chicken to the pan and stir to coat with the sauce. Add the cornstarch mixture to thicken the sauce. Cook for another 2-3 minutes until the sauce has thickened and the chicken is well coated.</li>
          <li>Garnish with fresh coriander leaves if desired. Serve hot with rice or noodles.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChilliChickenRecipe;
