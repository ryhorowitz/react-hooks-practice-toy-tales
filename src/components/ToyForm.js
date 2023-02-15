import React, { useState } from "react";

function ToyForm({ onFormSubmit }) {

  const [ form, setForm] = useState( {
    name: '',
    image: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    onFormSubmit(form)
    //cb(form)
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setForm({
       ...form,
      [name]: value
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
        onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
