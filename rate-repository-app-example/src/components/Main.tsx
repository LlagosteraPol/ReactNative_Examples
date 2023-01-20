import React from 'react' 
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/login'
//Old: import {Redirect, Route, Switch} from 'react-router-native'
//no need to use 'exact' anymore since the 'Route' is always exact

//npx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start --web
const Main = () => {
    return(
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />}>
                    
                </Route>
                <Route path='/signin' element={<LogInPage />}>
                    
                </Route>
                <Route path='/' element={<Navigate to='/' />}>

                </Route>
            </Routes>
        </View>
    )
}

export default Main