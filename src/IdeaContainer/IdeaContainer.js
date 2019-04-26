import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

const IdeaContainer = (props) => {
  const ideaCards = props.ideas.map(idea => {
    return <IdeaCard 
      key={idea.id} 
      idea={idea} 
      removeIdea={this.props.removeIdea}
    />
  })

    return(
      <section>
        {ideaCards}
      </section>
    )
}

export default IdeaContainer;