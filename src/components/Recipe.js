import React from "react";
import '../style.css';
import { Link } from 'react-router-dom';

export default function Recipe({ recipe, children }) {
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <div className="container">
      
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
        <Link to={`/recipes/${recipe.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <img src={recipe.img} alt="" className="recipe-image" />
          </Link>
        </div>
        {children}
        
      </div>
    </div>
  );
}
