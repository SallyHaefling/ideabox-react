import React, {Component} from 'react';

export default class IdeaCard extends Component {
  
  render() {
    const {title, body, id} = this.props.idea
    return (
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={() => this.props.removeIdea(id)}>delete
        </button>
      </section>
    )
  }
}