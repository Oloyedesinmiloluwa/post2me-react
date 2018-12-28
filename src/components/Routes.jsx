import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostPage from './PostPageContainer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={() => window.location.href = "http://localhost:8000"} />
        <Route path='/posts' component={PostPage} />
      </Switch>
    </Router>
  )
}

export default Routes
