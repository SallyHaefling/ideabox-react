import React, {Component} from 'react';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import { connect } from 'react-redux';
import { createIdea } from '../../actions';
import { deleteIdea } from '../../actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      
    }
  }

  addIdea = (idea) => {
    const newIdea = {title: idea.title, body: idea.body, id: Date.now()};
    this.props.createIdea(newIdea)
  }

  removeIdea = (id) => {
    const oldIdea = this.props.ideas.filter(idea => idea.id !== id)
    this.props.deleteIdea(oldIdea)
  }

  render() {
    return(
      <div className='app-container'>
        <h1 className='app-header'>ideabox.</h1>
        <IdeaForm addIdea={this.addIdea}/>
        <IdeaContainer ideas={this.props.ideas}
          removeIdea={this.removeIdea}
        />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export const mapDispatchToProps = (dispatch) => ({
  createIdea: (newIdea) => dispatch(createIdea(newIdea)),
  deleteIdea: (oldIdea) => dispatch(deleteIdea(oldIdea))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)