import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

export const MealScreen = (props) => {
    const { meal } = props.route.params;

    return(
        <View>
            <View style={styles.headerView}>
                <ImageBackground 
                    source={{uri: meal.imgUrl}}
                    style={styles.headerImage}>
                    <Text style={styles.headerText}>{meal.name}</Text>
                </ImageBackground>
                </View>
                <View style={styles.bodyView}>
                    <View style={styles.bodyDescription}>
                        <Text style={styles.bodyText}>Description:</Text>
                        <Text>{meal.description}</Text>
                    </View>
                    <View style={styles.bodyIngredients}>
                        <Text style={styles.bodyText}>Ingredients: </Text>
                        <Text>{meal.text}</Text>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 300
    },
    headerImage: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-end' 
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 10,
        textAlign: 'center'
    },
    bodyView: {
        backgroundColor: '#67D19C',
        height: '100%'
    },
    bodyDescription: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#1E7D4E'
    },
    bodyIngredients: {
        margin: 10,
        padding: 10,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#1E7D4E'
    },
    bodyText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});