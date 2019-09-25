import React from 'react';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
    const id = props.navigation.getParam('id');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0);

    return (
        <MealList data={displayedMeals} navigation={props.navigation}/>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('id');
    const category = CATEGORIES.find(category => category.id === id);

    return {
        headerTitle: category.title
    }
};

export default CategoryMealScreen;