import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

import { CategoriesScreen } from '../components/CategoriesScreen';
import { MealScreen } from '../components/MealScreen';
import { MealsListScreen } from '../components/MealsListScreen';
import { FavouriteScreen } from '../components/FavouriteScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

const MealsStack = createNativeStackNavigator();
const FavouriteStack = createNativeStackNavigator();
const MainStack = createBottomTabNavigator();

const defineColor = focused => focused ? 'orange' : 'grey';

const MealsNavigation = () => (
  <MealsStack.Navigator initialRouteName="Categories">
      <MealsStack.Screen name="Categories" component={CategoriesScreen}/>
      <MealsStack.Screen 
        name="MealsList" 
        component={MealsListScreen}
        options={({ route }) => ({
          title: `Meals for ${route.params.categoryName}`
        })}
        />
      <MealsStack.Screen 
        name="Meal" 
        component={MealScreen}
        options={({ route, navigation }) => ({
          title: `${route.params.meal.name}`,
          headerRight: () => {
            const favMeals = useSelector(state => state.meals.favMeals);

            const like = favMeals.some(meal => meal.id === route.params.meal.id);

            const dispatch = useDispatch();
            return(
              <Button 
                title="Like"
                onPress={() => {
                  dispatch(toggleFavorite(route.params.meal.id))
                }}
                color={like ? 'green' : 'gray'}
                />
            )
          }
        })}/>
  </MealsStack.Navigator>
);

const FavouriteNavigation = () => (
  <FavouriteStack.Navigator initialRouteName="Favourite">
      <FavouriteStack.Screen 
        name="Favourite" 
        component={FavouriteScreen}
        />
      <FavouriteStack.Screen 
        name="Meal" 
        component={MealScreen}
        options={({ route }) => ({
          title: `Favourite ${route.params.meal.name}`,
        })}/>
  </FavouriteStack.Navigator>
);

export const ApplicationNavigation = () => (
  <NavigationContainer> 
    <MainStack.Navigator initialRouteName="Meals">
      <MealsStack.Screen 
        name="Meals"
        component={MealsNavigation}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='menu' size={30} color={defineColor(focused)}/>,
          headerShown: false

        }}/>
      <MealsStack.Screen 
        name="Favourites"
        component={FavouriteNavigation}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='star' size={30} color={defineColor(focused)}/>,
          headerShown: false
        }}/>
    </MainStack.Navigator>
  </NavigationContainer>
);