import React from 'react';
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import { View, StyleSheet } from "react-native";

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}><DefaultText>No favs so far.</DefaultText></View>
    }

    return (
        <MealList data={favMeals} navigation={props.navigation}/>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    };
};

export default FavoritesScreen;