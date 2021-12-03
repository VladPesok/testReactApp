import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {MealElement} from './MealsListElement';

import { useSelector } from 'react-redux';

export const FavouriteScreen = (props) => {
    const meals = useSelector(state => state.meals.favMeals);
    
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