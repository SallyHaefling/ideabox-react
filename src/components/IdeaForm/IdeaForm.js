import React, {Component} from 'react';
import './IdeaForm.css';

export default class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state)
    this.setState({
      title: '', body: ''
    })
  }

  render() {
    return(
      <form className='idea-form' onSubmit={this.handleSubmit}>
        <input 
          className='title input'
          value={this.state.title}
          id='title'
          name='title'
          onChange={this.handleChange}
        />
        <input 
          className='body input'
          value={this.state.body}
          id='body'
          name='body'
          onChange={this.handleChange}
        />
        <button className='submit-btn'>Submit an idea!</button>
      </form>
    )
  }
}