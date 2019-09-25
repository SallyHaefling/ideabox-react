import React, {Component} from 'react';
// import IdeaCard from './IdeaCard';
// import IdeaContainer from './IdeaContainer';

export default class App extends Component {
  constructor() {
    super();
    this.state={
      ideas: []
    }
  }

addIdea = (idea) => {
  const newIdea = {title: idea, body: idea.body, id: Date.now()};
  this.props.createIdea(newIdea);
}

  render() {
    return(
      <div>
        <h1>IdeaBox</h1>
      </div>
    )
  }
}