import { getDummyCategories, getDummyMeals } from "../../dummyData/dummyData";
import {
    TOGGLE_FAVORITE
} from '../actions/meals';

const initCategories = getDummyCategories(8);

const initMeals = initCategories.reduce((prev, curr, index) => {
    prev.push(...getDummyMeals(curr.name, curr.id, 6, index*6))
    return prev;
}, []);

const initialState = {
    categories: initCategories,
    meals: initMeals,
    favMeals: []
}


const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const index = state.favMeals.findIndex(meal => meal.id === action.mealId);
            if(index >= 0){
                const updatedFavMeals = [...state.favMeals];
                updatedFavMeals.splice(index, 1);
                return { ...state, favMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                const updatedFavMeals = [...state.favMeals, meal];
                return {...state, favMeals: updatedFavMeals};
            }
    }
    return state;
}

export default mealsReducer;