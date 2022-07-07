import React from "react";

function RecipeCreate({ recipes, formData, handleFormChange, handleCreate }) { //Adds new recipe object to recipes state
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  // const checkFormState = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // } Button included for debugging purposes
  
  return (
    <form name="create" onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" id="name" type="text" onChange={handleFormChange} placeholder="Name" value={formData.name} />
            </td>
            <td>
              <input name="cuisine" id="cuisine" type="text" onChange={handleFormChange} placeholder="Cuisine" value={formData.cuisine} />
            </td>
            <td>
              <input name="photo" id="photo" type="text" onChange={handleFormChange} placeholder="URL" value={formData.photo} />
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" onChange={handleFormChange} placeholder="Ingredients" value={formData.ingredients} />
            </td>
            <td>
              <textarea name="preparation" id="preparation" onChange={handleFormChange} placeholder="Preparation" value={formData.preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
