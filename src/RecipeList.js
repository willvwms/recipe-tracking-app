import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: [ DONE] Display the list of recipes using the structure of table that is provided.
  // TODO: [ DONE] Create at least one additional component that is used by this component.
  // TODO: [ DONE] Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const recipeViews = recipes.map((recipe, index) => (
    <RecipeView recipe={recipe} deleteRecipe={deleteRecipe} index={index} />
  ));

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
        <tbody>{recipeViews}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
