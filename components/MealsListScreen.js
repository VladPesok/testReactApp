
import React from 'react';
import {View, FlatList} from 'react-native';
import {MealElement} from './MealsListElement';

import { useSelector } from 'react-redux';

export const MealsListScreen = (props) => {
    const { categoryId } = props.route.params;
    
    const allMeals = useSelector(state => state.meals.meals);
    const meals = allMeals.filter(meal => meal.categoryId === categoryId);

    return(
        <View>
            <FlatList 
                data={meals} 
                renderItem={(innerProps) => 
                    <MealElement {...innerProps} navigate={props.navigation.navigate}/>
                } 
                keyExtractor={item => String(item.id)}
                />
        </View>
    );
}