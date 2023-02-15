import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLike }) {

  const displaytoys = toys.map(toy => {
    const { id, name, image, likes } = toy
    return <ToyCard key={id}
      id={id}
      name={name}
      image={image}
      likes={likes}
      toy={toy}
      onDelete={onDelete}
      onLike={onLike}/>
  })

  return (
    <div id="toy-collection">{displaytoys}</div>
  );
}

export default ToyContainer;
