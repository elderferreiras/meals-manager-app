import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const id = props.navigation.getParam('id');
    const selectedMeal = MEALS.find(meal => meal.id === id);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('id');
    const selectedMeal = MEALS.find(meal => meal.id === id);

    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;