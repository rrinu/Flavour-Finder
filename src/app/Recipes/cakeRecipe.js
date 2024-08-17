import React from 'react';
import './RecipeStyle.css';
import chocolateCake from '../../features/allRecipes/img/cake.jpeg';

const ChocolateCakeRecipe = () => {
  return (
    <div className="recipe-detail-bg">
      <div className="recipe-detail">
        <h1>Chocolate Cake</h1>
        <img 
          src={chocolateCake}
          alt="Chocolate Cake" 
          className="recipe-image" 
        />
        <p><strong>Time:</strong> 1 hour 30 minutes</p>
        <h2>Ingredients</h2>
        <ul>
          <li>1 3/4 cups all-purpose flour</li>
          <li>1 1/2 cups granulated sugar</li>
          <li>3/4 cup unsweetened cocoa powder</li>
          <li>1 1/2 tsp baking powder</li>
          <li>1 1/2 tsp baking soda</li>
          <li>1/2 tsp salt</li>
          <li>2 large eggs</li>
          <li>1 cup whole milk</li>
          <li>1/2 cup vegetable oil</li>
          <li>2 tsp vanilla extract</li>
          <li>1 cup boiling water</li>
          <li>For the Frosting:
            <ul>
              <li>1 cup unsalted butter, softened</li>
              <li>3 1/2 cups powdered sugar</li>
              <li>1/2 cup unsweetened cocoa powder</li>
              <li>1/4 cup whole milk</li>
              <li>2 tsp vanilla extract</li>
            </ul>
          </li>
        </ul>
        <h2>Instructions</h2>
        <ul>
          <li>Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
          <li>In a large bowl, sift together the flour, sugar, cocoa powder, baking powder, baking soda, and salt.</li>
          <li>Add the eggs, milk, oil, and vanilla extract. Beat on medium speed for 2 minutes. Stir in the boiling water until the batter is well combined.</li>
          <li>Pour the batter evenly into the prepared cake pans.</li>
          <li>Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean. Cool in the pans for 10 minutes, then transfer to wire racks to cool completely.</li>
          <li>For the frosting, beat the butter until creamy. Gradually add the powdered sugar and cocoa powder, beating until smooth. Add the milk and vanilla extract and beat until fluffy.</li>
          <li>Frost the cooled cake with the chocolate frosting. Decorate as desired.</li>
          <li>Serve and enjoy your delicious chocolate cake!</li>
        </ul>
      </div>
    </div>
  );
};

export default ChocolateCakeRecipe;
