import React from 'react'
import {View, ScrollView, StyleSheet, TextStyle, TouchableWithoutFeedback} from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'
import {Link, useLocation} from 'react-router-dom'

type StyleText = {
   container: TextStyle,
   scroll: TextStyle,
   text: TextStyle,
   active: TextStyle,
}

const styles = StyleSheet.create<StyleText>({
   container: {
      backgroundColor: theme.appBar.primary,
      flexDirection: 'row',
      paddingTop: Constants.statusBarHeight + 10
   },
   scroll:{
      paddingBottom: 15
   },
   text: {
      color: theme.appBar.textSecondary,
      paddingHorizontal: 10
   },
   active: {
      color: theme.appBar.textPrimary

   }
})

const AppBarTab = ({children, to}:{children:string, to:string}) => {
   const {pathname} = useLocation()
   const active = pathname == to

   const textStyles = [
      styles.text,
      (active ? styles.active : {}) 
   ]

   return (
      <TouchableWithoutFeedback>
         <Link to={to}  style={{ textDecoration: 'none' }}>
            <StyledText fontWeight='bold' style={textStyles}>
               {children}
            </StyledText>
         </Link>
      </TouchableWithoutFeedback>
   )
}

const AppBar = () =>{
   const { pathname } = useLocation()

   //To not show the horitzontal scroll in the AppBarTab, add the prop: showsHorizontalScrollIndicator={false}
   return(
      <View style={styles.container}>
         <ScrollView horizontal style={styles.scroll}>
            <AppBarTab to='/'>Repositories</AppBarTab>
            <AppBarTab to='/signin'>Sign In</AppBarTab>
         </ScrollView>
      </View>
   )
}

export default AppBar