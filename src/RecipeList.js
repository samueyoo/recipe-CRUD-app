import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleDelete }) {

  const recipeArray = recipes.map((recipe, index) => {
    return (
      <Recipe recipe={recipe} index={index} handleDelete={handleDelete} />
    )
  })

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeArray}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
