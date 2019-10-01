import React from 'react';
import './IdeaCard.css';

const IdeaCard = (props) => {
  const {title, body, id} = props.idea;
  return (
    <div className='card-container'>
      <button className='delete-button' 
      onClick={() =>   props.removeIdea(id)}>
        X
      </button>
      <h2 className='card-title'>{title}</h2>
      <p className='card-body'>{body}</p>
    </div>
  )
}

export default IdeaCard;