/**
 * The root file that combines all of our types
 */
import Recipe from './Recipe';
import Ingredient from './Ingredient';

const Query = /* GraphQL */`
  type Query {
    recipes(vegetarian: Boolean, ingredient: String): [Recipe!]
    ingredients: [Ingredient!]
  }
`;

const Input = /* GraphQL */`
  input RecipeInput {
    title: String!
    vegetarian: Boolean!
    ingredients: [ID!]!
    preparation: [String!]!
  }
`;

const Mutation = /* GraphQL */`
  type Mutation {
    addIngredient(name: String!): Ingredient!
    addRecipe(recipe: RecipeInput!): Recipe!
  }
`

const Schema = /* GraphQL */`
  schema {
    query: Query
    mutation: Mutation
  }
`

export default [Schema, Mutation, Input, Query, Recipe, Ingredient];
