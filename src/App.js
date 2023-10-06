import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: [ DONE] Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const deleteRecipe = (recipeIndex) => {
    console.log(`delete = recipeIndex=${recipeIndex}`);
    // Copy new temporary array without the recipte to be "deleted"
    const updatedRecipes = recipes.filter(
      (post, index) => index !== recipeIndex
    );
    // Update state to the new temp array
    setRecipes([...updatedRecipes]);
  };

  // TODO: [ DONE] Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => {
    console.log("handleCREATE CALLED");

    // Add new recipe to array
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
