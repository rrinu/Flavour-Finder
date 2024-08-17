import React from 'react';
import './RecipeStyle.css';
import dumplings from './dumpling.jpg';

const DumplingsRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Dumplings</h1>
        <img 
          src={dumplings}
          alt="Dumplings" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 1 hour</p>
        <h2>Ingredients</h2>
        <ul>
          <li>For the Dumpling Dough:
            <ul>
              <li>2 cups all-purpose flour</li>
              <li>3/4 cup boiling water</li>
              <li>1/4 tsp salt</li>
            </ul>
          </li>
          <li>For the Filling:
            <ul>
              <li>250g ground pork or chicken</li>
              <li>1 cup finely chopped cabbage</li>
              <li>1/4 cup finely chopped carrots</li>
              <li>2 green onions, finely chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>1 tbsp soy sauce</li>
              <li>1 tsp sesame oil</li>
              <li>1/2 tsp ginger, grated</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>In a mixing bowl, combine flour and salt. Gradually add boiling water, stirring continuously until the dough starts to come together.</li>
          <li>Knead the dough on a lightly floured surface for about 5 minutes until smooth. Cover with a damp cloth and let it rest for 30 minutes.</li>
          <li>For the filling, mix the ground pork or chicken with cabbage, carrots, green onions, garlic, soy sauce, sesame oil, ginger, salt, and pepper until well combined.</li>
          <li>Divide the dough into small balls and roll each ball into a thin circle. Place a spoonful of filling in the center of each circle.</li>
          <li>Fold the dough over the filling and seal the edges by pleating or pinching them together. Ensure the dumplings are well sealed to prevent the filling from leaking.</li>
          <li>To cook the dumplings, heat a large pan over medium heat and add a small amount of oil. Arrange the dumplings in the pan, making sure they are not touching.</li>
          <li>Fry the dumplings until the bottoms are golden brown, about 3-4 minutes. Add a small amount of water to the pan and cover immediately to steam the dumplings for another 5 minutes.</li>
          <li>Remove the lid and continue cooking until the water has evaporated and the bottoms are crispy again.</li>
          <li>Serve hot with dipping sauce and enjoy your homemade dumplings!</li>
        </ul>
      </div>
    </div>
  );
};

export default DumplingsRecipe;
