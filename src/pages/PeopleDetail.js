import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import Line from '../components/Line'
import { capitalizeFirstLetter } from '../util'

export default class PeopleDetail extends React.Component{
    render(){
        const { people } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: people.picture.large}}
                    style={styles.avatar}/>
                    <View style={styles.containerDetail}>
                        <Line label={'Email: '} content={people.email}/>
                        <Line label={'Cidade: '} content={capitalizeFirstLetter(people.location.city)}/>
                        <Line label={'Estado: '} content={capitalizeFirstLetter(people.location.state)}/>
                        <Line label={'Tel.: '} content={people.phone}/>
                        <Line label={'Cel.: '} content={people.cell}/>
                        <Line label={'Nacionalidade: '} content={people.nat}/>
                        <Line label={'Nacionalidade: '} content={people.nat}/>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      padding: 15
    },
    avatar: {
        aspectRatio: 1
    },
    containerDetail:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
})