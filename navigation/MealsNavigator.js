import React from 'react';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons';
import FiltersScreen from "../screens/FiltersScreen";

const stackConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
}, stackConfig);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, stackConfig);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primary
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accent
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true
    }) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accent
        }
    });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
