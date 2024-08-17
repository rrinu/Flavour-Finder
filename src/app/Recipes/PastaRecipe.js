import React from 'react';
import './RecipeStyle.css';
import pasta from '../../features/allRecipes/img/pasta.jpg';

const PastaRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Spaghetti Carbonara</h1>
        <img 
          src={pasta}
          alt="Spaghetti Carbonara" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 25 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>200g spaghetti</li>
          <li>100g pancetta or bacon, diced</li>
          <li>2 large eggs</li>
          <li>50g grated Parmesan cheese</li>
          <li>2 cloves garlic, minced</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh parsley, chopped (optional)</li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>Cook the spaghetti in a large pot of salted boiling water until al dente.</li>
          <li>While the pasta cooks, heat a large pan over medium heat and cook the pancetta or bacon until crispy. Add the garlic and cook for 1 minute.</li>
          <li>In a bowl, beat the eggs and mix in the grated Parmesan cheese. Season with a pinch of salt and pepper.</li>
          <li>Drain the pasta, reserving some of the pasta water.</li>
          <li>Quickly toss the hot pasta in the pan with the pancetta and garlic.</li>
          <li>Remove the pan from the heat and stir in the egg and cheese mixture, adding a little reserved pasta water to create a creamy sauce.</li>
          <li>Serve immediately, garnished with fresh parsley if desired.</li>
        </ul>
      </div>
    </div>
  );
};

export default PastaRecipe;
