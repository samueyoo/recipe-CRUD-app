import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const initialFormState = { name: "", cuisine: "", photo: "", ingredients: "", preparation: "" }
  const [recipes, setRecipes] = useState(RecipeData); //Array of recipes (objects)
  const [formData, setFormData] = useState(initialFormState);

  const handleFormChange = ({ target }) => {
    console.log("Target name:", target.name)
    console.log("Target value:", target.value)
    setFormData( {...formData, [target.name]: target.value } );
  }

  const handleDelete = (e) => { //Fired on click of the Delete button
    const parentTr = e.target.parentNode.parentNode;
    console.log("Parent ID/index of state array:", parentTr.id);
    const newRecipes = recipes.filter((recipe, index) => index != parentTr.id)
    console.log("New recipes:", newRecipes)
    setRecipes(newRecipes)
  }

  const handleCreate = (e) => { //Fired on click of the Create button
    e.preventDefault();
    console.log("New recipes:", [...recipes, formData]);
    setRecipes([...recipes, formData]);
    setFormData(initialFormState);
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate recipes={recipes} formData={formData} handleFormChange={handleFormChange} handleCreate={handleCreate} />
    </div>
  );
}

export default App;
