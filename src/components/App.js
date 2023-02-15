import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
      .then(r => r.json())
      .then(toys => setToys(toys))
      .catch(err => console.error(`Error ${err}`))
  }, [])

  function handleNewToySubmission(toyForm) {
    const postBody = { ...toyForm, likes: 0 }
    const postObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postBody)
    }
    fetch(`http://localhost:3001/toys`, postObj)
      .then(r => r.json())
      .then(newToy => setToys([...toys, newToy]))
      .catch(err => console.error(`Error ${err}`))
  }
  function handleDelete(id) {
    const updatedToys = toys.filter(toy => toy.id !== id)
    fetch(`http://localhost:3001/toys/${id}`, { method: 'DELETE' })
      .then(r => r.json())
      .then(() => setToys(updatedToys))
      .catch(err => console.error(`Error ${err}`))

  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleLikeUpdate(id) {
    const updatedToys = toys.map(toy => {
      if (toy.id === id) {
        toy.likes += 1
      }
      return toy
    })
    
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={handleNewToySubmission} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLike={handleLikeUpdate} />
    </>
  );
}

export default App;
