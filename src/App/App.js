import React, {Component} from 'react';
import '../App.css';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaContainer from '../IdeaContainer/IdeaContainer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdeas = [...this.state.ideas, 
      {title: idea.title, body: idea.body, id: Date.now()}];
    this.setState({
      ideas: newIdeas
    })
  }

  removeIdea = (id) => {
    const newIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({
      ideas: newIdeas
    })
  }

  render() {
    return (
      <section className = 'App'>
        <h2>IdeaBox in React</h2>
        <IdeaForm addIdea={this.addIdea}/>
        <IdeaContainer removeIdea={this.removeIdea}
                       ideas={this.state.ideas}
        />
      </section>
    )
  }
}
