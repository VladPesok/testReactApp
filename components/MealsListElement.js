
import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';

  
export const MealElement = ({item, navigate}) => {
    return(
        <View style={styles.mealElementMainView}>
            <TouchableOpacity onPress={() => navigate('Meal', {
                meal: item
            })}>
                <View style={styles.mealElementTopView}>
                    <ImageBackground 
                        source={{uri: item.imgUrl}}
                        style={styles.mealElementTopViewImage}>
                        <Text style={styles.mealElementTopViewText}>{item.name}</Text>
                    </ImageBackground>
                </View>
                <View>
                    <Text style={styles.mealElementBottomViewText}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealElementMainView: {
        borderRadius: 10, 
        overflow: 'hidden',
        backgroundColor: '#67D19C',
        height: 220, 
        marginVertical: 8,
        marginHorizontal: 8,
    },
    mealElementTopView: {
        height: '90%'
    },
    mealElementTopViewImage: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-end'
    },
    mealElementTopViewText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 10,
        textAlign: 'center'
    },
    mealElementBottomViewText: {
        fontSize: 15, 
        fontWeight: 'bold', 
        textAlign: 'center'
    }
});