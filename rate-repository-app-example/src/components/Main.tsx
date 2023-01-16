import React from 'react' 
import Constants from 'expo-constants'
import {Text, View} from 'react-native'
import RepositoryList from './RepositoryList'


const Main = () => {
    return(
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <RepositoryList/>
        </View>
    )
}

export default Main