import React, { Component } from 'react'
import { Router, Route, Link, RouteHandler, DefaultRoute } from 'react-router'
import CommentBox from './CommentBox.es6'

export default class Main extends React.Component {
  render() {
    return(
      <div className='main'>
        <h1>Main</h1>
        <ul>
          <li><Link to="/hoge">Hoge</Link></li>
          <li><a href="/foo">foo</a></li>
        </ul>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    );
  }
}

$(function() {
  React.render(
    (
      <Router>
        <Route path="/" component={Main}>
          <Route path="/hoge" component={CommentBox} />
        </Route>
      </Router>
    ),
    window.document.body
  );
});
