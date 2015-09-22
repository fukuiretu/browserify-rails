import React, { Component } from 'react';
import CommentList from './CommentList.es6';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
        <CommentList />
      </div>
    );
  }
}
