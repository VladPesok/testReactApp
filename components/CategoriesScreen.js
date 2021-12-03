
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import {getRandomColor} from '../utils/getRandomColor';

import { useSelector } from 'react-redux';

const MealCategoryElement = ({item, navigate}) => {
    return(
        <View style={{
            borderRadius: 10,
            width: '46%', 
            height: 130, 
            backgroundColor: getRandomColor(),
        }}>
            <TouchableOpacity onPress={() => navigate('MealsList', {
                categoryId: item.id,
                categoryName: item.name,
            })} style={styles.mealsCategoryElementTouchableOpacity}>
                <Text style={styles.mealsCategoryElementText}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export const CategoriesScreen = (props) => {
    const categories = useSelector(state => state.meals.categories);

    return(
        <View style={styles.mainView}>
            <FlatList 
                data={categories} 
                columnWrapperStyle={styles.flatList}
                renderItem={(innerProps) => 
                    <MealCategoryElement {...innerProps} navigate={props.navigation.navigate}/>
                } 
                keyExtractor={item => String(item.id)}
                numColumns={2}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    flatList: {
        justifyContent: 'space-between', 
        padding: 15
    },
    mealsCategoryElementView: {
        borderRadius: 10,
        width: '46%', 
        height: 130, 
        backgroundColor: getRandomColor(),
    },
    mealsCategoryElementTouchableOpacity: {
        flex: 1, 
        justifyContent: 'flex-end', 
        padding: 20,
        alignItems: 'flex-end',
    },
    mealsCategoryElementText: {
        fontSize: 16, 
        fontWeight: 'bold' 
    }
});