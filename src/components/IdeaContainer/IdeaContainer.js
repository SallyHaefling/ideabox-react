import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

const IdeaContainer = ({ideas, removeIdea}) => {
  const ideaCards = ideas.map(idea => {
    return <IdeaCard 
      key={idea.id}
      removeIdea={removeIdea}
      idea={idea}
    />
  })
  return(
    <div>
      {ideaCards}
    </div>
  )
}

export default IdeaContainer;
