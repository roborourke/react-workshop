import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState, withHandlers } from 'recompose';

const AddIngredient = ({ data, name, setName, addIngredient, successMessage }) => (
  <form onSubmit={addIngredient}>
    <input
      type="text"
      value={name}
      onChange={({ target }) => {
        setName(target.value);
      }}
    />
    <button type="submit">Create Ingredient</button>
    {successMessage || <div>{successMessage}</div>}
  </form>
);

export const addIngredient = gql`
  mutation($name: String!) {
    addIngredient(name: $name) {
      name
    }
  }
`

export const getIngredients = gql`
  query GetIngredients {
    ingredients {
      _id
      name
    }
  }
`

const enhance = compose(
  withState('name', 'setName', ''),
  withState('successMessage', 'setSuccessMessage', ''),
  graphql(addIngredient),
  withHandlers({
    addIngredient: props => event => {
      event.preventDefault()
      props.setName('')
      props.mutate({
        variables: {
          name: props.name
        },
        refetchQueries: [
          'GetIngredients'
        ]
      }).then(data => {
        props.setSuccessMessage('hooray')
      })
    }
  })
);

export default enhance(AddIngredient);
