import React, { Component } from 'react';
import SimpleCard from './cards.js'

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

    const url = `${process.env.REACT_APP_API_ROOT}comments/${this.props.match.params.id}`
    this.getComments(url);
  }

  getComments = async( url ) => {
    const response = await fetch(url);
    if (response.ok) {
      const comments = await response.json();
      this.setState({ comments });
    } else {
      const comments = undefined;
      this.setState({ comments });
    }
}

render () {
  if (this.state.comments === undefined ){
    return (<div><h2>Cannot find a valid comment here.</h2></div>)
  }
  return (
    <div>
      {this.state.comments.map(SimpleCard)}
      </div>
  )
}

}

export default Comments