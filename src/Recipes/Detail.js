import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import withLoading from '../withLoading';
import { withRouter, Link } from 'react-router-dom';

const RecipeDetail = ({
  data
}) => (
  <div>
    <nav><Link to="/">Back</Link></nav>
    <h1>{data.recipe.title} {data.recipe.vegetarian && '(v)'}</h1>
    <h3>Preparation</h3>
    <div>
      {data.recipe.preparation.map(entry => <p key={entry}>{entry}</p>)}
    </div>
    <h3>Ingredients</h3>
    <div>
      {data.recipe.ingredients.map(ingredient => (
        <div key={ingredient._id}>
          {ingredient.name}
        </div>
      ))}
    </div>
  </div>
)

const withQuery = graphql(gql`
  query( $id: ID! ) {
    recipe(id: $id) {
      title
      ingredients {
        _id
        name
      }
      preparation
      vegetarian
    }
  }
`, {
  options: props => ({
    variables: {
      id: props.match.params.recipe
    }
  })
})

const enhance = compose(
  withRouter,
  withQuery,
  withLoading
)

export default enhance(RecipeDetail)
