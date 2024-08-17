import React from 'react';
import './RecipeStyle.css';
import masalaDosa from '../../features/allRecipes/img/masala-dosa.png';

const MasalaDosaRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Masala Dosa</h1>
        <img 
          src={masalaDosa}
          alt="MasalaDosa" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 1 hour</p>
        <h2>Ingredients</h2>
        <ul>
          <li>For the Dosa Batter:
            <ul>
              <li>1 cup rice</li>
              <li>1/4 cup urad dal (black gram split pulse)</li>
              <li>1/4 cup chana dal (Bengal gram)</li>
              <li>1/2 tsp fenugreek seeds</li>
              <li>Water, as needed</li>
              <li>Salt, to taste</li>
            </ul>
          </li>
          <li>For the Masala Filling:
            <ul>
              <li>4 medium potatoes, boiled and mashed</li>
              <li>1 large onion, finely chopped</li>
              <li>1 green chili, finely chopped</li>
              <li>1 tsp mustard seeds</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1/2 tsp cumin seeds</li>
              <li>10 curry leaves</li>
              <li>2 tbsp oil</li>
              <li>Salt, to taste</li>
              <li>Fresh coriander leaves, chopped</li>
            </ul>
          </li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>Soak rice, urad dal, chana dal, and fenugreek seeds in water for 4-6 hours or overnight.</li>
          <li>Drain and grind the mixture with water to a smooth batter. Ferment the batter for 8-12 hours or overnight.</li>
          <li>For the masala filling, heat oil in a pan. Add mustard seeds, cumin seeds, and curry leaves. Let them splutter.</li>
          <li>Add chopped onions and green chilies. Sauté until onions are golden brown.</li>
          <li>Add turmeric powder and mix well. Add the mashed potatoes and salt. Cook for 5-7 minutes. Garnish with coriander leaves.</li>
          <li>Heat a non-stick or cast-iron griddle. Pour a ladleful of batter and spread it in a thin circle. Drizzle a little oil around the edges.</li>
          <li>Cook until the dosa is golden brown and crisp. Place some of the masala filling on one side of the dosa and fold it over.</li>
          <li>Serve hot with coconut chutney and sambar.</li>
        </ul>
      </div>
    </div>
  );
};

export default MasalaDosaRecipe;
