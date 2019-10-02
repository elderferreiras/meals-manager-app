import React from 'react';
import {CATEGORIES} from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';
import {View, StyleSheet} from 'react-native';
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = props => {
    const id = props.navigation.getParam('id');
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(id) >= 0);

    if(displayedMeals.length === 0) {
        return <View style={styles.content}><DefaultText>No meals found.</DefaultText></View>
    }
    return (
        <MealList data={displayedMeals} navigation={props.navigation}/>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

CategoryMealScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('id');
    const category = CATEGORIES.find(category => category.id === id);

    return {
        headerTitle: category.title
    }
};

export default CategoryMealScreen;