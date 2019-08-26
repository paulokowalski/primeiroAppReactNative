import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetail from "./src/pages/PeopleDetail";
import { capitalizeFirstLetter } from './src/util'

const AppNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PeopleDetail': {
        screen: PeopleDetail,
        navigationOptions: ({navigation}) => {
            const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
            return ({
                title: peopleName,
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 30,
                    flexGrow: 1
                }
            })
        }
    }
}, {
    defaultNavigationOptions: {
        title:'Pessoas',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center'
        }
    }
});

export default createAppContainer(AppNavigator);