import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PeopleListItem from "./PeopleListItem";

const PeopleList = props => {
    const { peoples, onPressItem } = props;
    return (
        <FlatList
            data={peoples}
            renderItem={({item}) => (
                <PeopleListItem
                people={item}
                navigateToPeopleDetail={onPressItem}/>
                ) }
            style={styles.container}
            keyExtractor={item=>item.name.first}/>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;