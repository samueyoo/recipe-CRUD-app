import React from "react";

function Recipe({ recipe, index, handleDelete }) { //Recipe will be an individual recipe object
    const { name, cuisine, photo, ingredients, preparation } = recipe;

    return (
        <tr key={index} id={index}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img src={photo} alt="" /></td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td><button name="delete" onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default Recipe;