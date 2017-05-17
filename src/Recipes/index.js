import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState } from 'recompose';
import withLoading from '../withLoading';
import { Link } from 'react-router-dom';

const Recipes = ({
  data,
  vegetarianFilter,
  setVegetarianFilter,
  ingredientFilter,
  setIngredientFilter
}) => (
  <div>
    <h3>Vegetarian Filter</h3>
    <div>
      <button
        style={{ background: vegetarianFilter === null ? '#ccc' : '#fff' }}
        onClick={() => setVegetarianFilter(null)}
      >
        Off
      </button>
      <button
        style={{ background: vegetarianFilter === true ? '#ccc' : '#fff' }}
        onClick={() => setVegetarianFilter(true)}
      >
        Yes
      </button>
      <button
        style={{ background: vegetarianFilter === false ? '#ccc' : '#fff' }}
        onClick={() => setVegetarianFilter(false)}
      >
        No
      </button>
    </div>
    <h3>Ingredient Filter</h3>
    <div>
      <select
        value={ingredientFilter}
        onChange={({ target }) => {
          setIngredientFilter(target.value ? target.value : undefined);
        }}
      >
        <option value={''}>Not active</option>
        {data.ingredients.map(ingredient => (
          <option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>
        ))}
      </select>
    </div>
    <h1>Recipes</h1>
    {data.recipes.map(({ title, preparation, ingredients, _id }) => (
      <div key={_id}>
        <h2><Link to={`/recipe/${_id}`}>{title}</Link></h2>
      </div>
    ))}
  </div>
);

const withQuery = graphql(gql`
  query($vegetarian: Boolean, $ingredient: ID) {
    recipes(
      vegetarian: $vegetarian
      ingredient: $ingredient
    ) {
      _id
      title
      preparation
      vegetarian
      ingredients {
        _id
        name
      }
    }
    ingredients {
      _id
      name
    }
  }
`, {
  options: props => ({
    variables: {
      vegetarian: props.vegetarianFilter,
      ingredient: props.ingredientFilter,
    }
  })
})

const enhance = compose(
  withState('vegetarianFilter', 'setVegetarianFilter', null),
  withState('ingredientFilter', 'setIngredientFilter', ''),
  withQuery,
  withLoading
);

export default enhance(Recipes);
