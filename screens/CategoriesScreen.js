import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {
    const renderGridItem = (data) => {
        return <CategoryGridTitle
            title={data.item.title}
            color={data.item.color}
            pressed={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', params: {
                        id: data.item.id
                    }
                });
            }}/>
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}/>
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
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

export default CategoriesScreen;