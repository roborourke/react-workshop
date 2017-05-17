import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recipes from './Recipes';
import RecipeDetail from './Recipes/Detail';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001',
  })
});

ReactDOM.render(
  <ApolloProvider client={ client }>
    <Router>
      <div>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/recipe/:recipe" component={RecipeDetail} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
