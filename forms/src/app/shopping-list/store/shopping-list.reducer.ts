// import { Action } from "@ngrx/store";

import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.action';

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            console.log(typeof ingredient)
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }

            const updatedIngredients = [...state.ingredients]
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                })
            }
        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: { ...state.ingredients[action.payload] }
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        default:
            return initialState;
    }
}