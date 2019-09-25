import React from 'react';

const IdeaCard = (props) => {
  const {title, body, id} = props.idea
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => props.removeIdea(id)}>X</button>
    </div>
  )
}

export default IdeaCard;