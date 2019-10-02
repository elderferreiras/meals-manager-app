import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = data => {
        const isFavorite = favoriteMeals.some(meal => meal.id === data.item.id);
        return <MealItem title={data.item.title}
                         duration={data.item.duration}
                         complexity={data.item.complexity}
                         image={data.item.imageUrl}
                         affordability={data.item.affordability}
                         selected={() => {
                             props.navigation.navigate({routeName: 'MealDetail', params: {
                                     id: data.item.id,
                                     mealTitle: data.item.title,
                                     isFav: isFavorite
                                 }});
                         }}
        />;
    };

    return (
        <View style={styles.screen}>
            <FlatList data={props.data}
                      keyExtractor={(item, index) => item.id}
                      renderItem={renderMealItem}
                      style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;