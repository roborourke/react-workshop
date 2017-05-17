/**
 * The root file that combines all of our types
 */

const Query = /* GraphQL */`
	type Query {
		recipes(
			vegetarian: Boolean
			ingredient: ID
		): [Recipe]
		recipe(id: ID!): Recipe
		ingredient(id: ID!): Ingredient
		ingredients(id: [ID]): [Ingredient]
	}
`;

const Schema = /* GraphQL */`
	schema {
		query: Query
	}
`

const Ingredient = /* GraphQL */`
	type Ingredient {
		_id: ID!
		name: String!
	}
`

const Recipe = /* GraphQL */`
	type Recipe {
		_id: ID!
		title: String!
		vegetarian: Boolean!
		ingredients: [Ingredient]
		preparation: [String]
	}
`

// TODO: Add all of your types to this array
export default [Schema, Query, Recipe, Ingredient];
