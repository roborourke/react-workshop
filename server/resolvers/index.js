/**
 * The root file that combines all of our resolvers
 */

import { getRecipe, getRecipes } from '../models/Recipe'
import { getIngredient, getIngredients } from '../models/Ingredient'

export default {
	Query: {
		recipe: ( _, args ) => getRecipe( args.id ),
		recipes: ( _, args ) => getRecipes( args ),
		ingredient: ( _, args ) => getIngredient( args.id ),
		ingredients: ( _, args ) => getIngredients( args ),
	},
	Recipe: {
		ingredients: ( recipe ) => recipe.ingredients.map( getIngredient )
	}
};
