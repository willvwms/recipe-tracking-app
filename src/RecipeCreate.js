import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: [ DONE] When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: [ DONE] Add the required input and textarea form elements.
  // TODO: [ DONE] Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    console.log(`Current value of ${target.name}: ${target.value}`);
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    // console.log(
    //   `Submitted:
    //   name:
    //   ${formData.name}

    //   cuisine:
    //   ${formData.cuisine}

    //   photo:
    //   ${formData.photo}

    //   ingredients:
    //   ${formData.ingredients}

    //   preparation:
    //   ${formData.preparation}
    //   `
    // );
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              {" "}
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                required
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              {" "}
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="Photo"
                required
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              {" "}
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                required
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              {" "}
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                required
                onChange={handleChange}
                value={formData.preparation}
              />
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
