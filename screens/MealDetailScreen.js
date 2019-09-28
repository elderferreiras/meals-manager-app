import React from 'react';
import {ScrollView, Image, View, Text, Button, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from "../components/DefaultText";

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
};
const MealDetailScreen = props => {
    const id = props.navigation.getParam('id');
    const selectedMeal = MEALS.find(meal => meal.id === id);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 22
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;