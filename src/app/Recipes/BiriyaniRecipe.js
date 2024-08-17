import React from 'react';
import './RecipeStyle.css';
import biryani from '../../features/allRecipes/img/biriyani.png'; 

const BiryaniRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Chicken Biryani</h1>
        <img 
          src={biryani}
          alt="Chicken Biryani" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 1 hour 15 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>500g chicken, cut into pieces</li>
          <li>2 cups basmati rice</li>
          <li>1 large onion, thinly sliced</li>
          <li>2 tomatoes, chopped</li>
          <li>1 cup plain yogurt</li>
          <li>2 tbsp ginger-garlic paste</li>
          <li>1/4 cup biryani masala</li>
          <li>1/2 tsp turmeric powder</li>
          <li>1 tsp red chili powder</li>
          <li>1/2 tsp cumin seeds</li>
          <li>2 bay leaves</li>
          <li>4 cloves</li>
          <li>2 green chilies, slit</li>
          <li>1/4 cup chopped coriander leaves</li>
          <li>1/4 cup chopped mint leaves</li>
          <li>3 tbsp cooking oil</li>
          <li>Salt to taste</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>Rinse the basmati rice and soak it in water for 30 minutes.</li>
          <li>In a large pot, heat the oil and cook the onions until golden brown. Remove half for garnishing.</li>
          <li>Add the ginger-garlic paste to the pot and cook for 2 minutes. Add the tomatoes and cook until they soften.</li>
          <li>Add the chicken pieces, biryani masala, turmeric powder, red chili powder, and salt. Cook until the chicken is tender and the spices are well blended.</li>
          <li>Add the yogurt, coriander leaves, and mint leaves. Mix well and cook for 5 minutes.</li>
          <li>In another pot, bring water to a boil, add bay leaves, cloves, and cumin seeds. Add the soaked rice and cook until 70% done. Drain the rice.</li>
          <li>Layer the partially cooked rice over the chicken mixture in the pot. Sprinkle the reserved fried onions on top.</li>
          <li>Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes, allowing the flavors to meld together.</li>
          <li>Gently fluff the biryani before serving. Enjoy!</li>
        </ul>
      </div>
    </div>
  );
};

export default BiryaniRecipe;
