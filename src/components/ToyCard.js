import React from "react";

function ToyCard({ id, name, image, likes, toy, onDelete, onLike }) {

  function handleDelete() {
    console.log('clicked', id)
    onDelete(id)
  }

  function handleLike() {
    //setup obj 
    //declare var for updated toy
    //send patch here
    console.log(id)
    const patchObj = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify( { likes: (likes + 1 ) } )// find which toy has an id of id 
    }

    fetch(`http://localhost:3001/toys/${id}`, patchObj)
    .then( r => r.json())
    //then invoke cb that updates state in app.js
    .then( (res) => {
      console.log(res)
      onLike(id)
    })
    .catch( err => console.error(`Error ${err}`))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
