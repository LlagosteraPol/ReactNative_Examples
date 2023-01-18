import React from 'react'
import {View, Image, Text, StyleSheet, TextStyle, ViewStyle, ImageStyle, StyleProp,} from 'react-native'
import theme from '../theme'
import StyledText from './StyledText'
import {viewRepositoryStats} from './RepositoryStats'
//JSX object type
/*
const RepositoryItem = (props) => (
   <View key={props.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
   <Text style={{fontWeight:'bold', marginBottom: 1}}>id: {props.id}</Text>
   <Text>FullName: {props.fullName}</Text>
   <Text>Description: {props.description}</Text>
   <Text>Language: {props.language}</Text>
   <Text>Forks: {props.forksCount}</Text>
   <Text>Stars: {props.stargazersCount}</Text>
   <Text>Rating: {props.ratingAverage}</Text>
   <Text>Review: {props.reviewCount}</Text>
   <Text>Avatar: {props.ownerAvatarUrl}</Text>
</View>
)

export default RepositoryItem
*/

type StyleRepoItem = {
   container: ViewStyle,
   strong: TextStyle,
   language: any, //Not the best solution
   image: ImageStyle
}

const styles = StyleSheet.create<StyleRepoItem>({
   container: {
      padding: 20,
      paddingBottom: 5, 
      paddingTop: 5
   },
   strong: {
      color: '#09f',
      fontWeight: 'bold',
      marginBottom: 5
   },
   language: {
      padding: 4,
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-start',
      marginTop:4,
      marginBottom:4,
      borderRadius: 4, // Rounded 'box'
      overflow: 'hidden'
   },
   image: {
      width: 48,
      height: 48,
      borderRadius: 4
   }
})

export interface RepositoryItem {
   id: string,
   fullName: string,
   description: string,
   language: string,
   forksCount: number,
   stargazersCount: number,
   ratingAverage: number,
   reviewCount: number,
   ownerAvatarUrl: string
}

const RepositoryItemHeader = (repItem:RepositoryItem) =>
(
   //the 'flex' serves the purpose to fit the child views inside the parent views (therefore the content doesn't exceed the parent space)
   <View style={{ flexDirection: 'row', paddingBottom: 2 }}> 
      <View  style = {{ paddingRight: 10}}>
         <Image style = {styles.image} source={{uri: repItem.ownerAvatarUrl}}/>
      </View>
     
      <View style = {{ flex: 1}}>
         <StyledText  fontWeight='bold'>{repItem.fullName}</StyledText>
         <StyledText color='secondary'>{repItem.description}</StyledText>
         <StyledText style={styles.language}>{repItem.language}</StyledText>  
      </View>
   </View>
)

export function viewRepositoryItem(repItem: RepositoryItem){

   // encapsulating the elements in distinct ways: 
   // RepositoryItemHeader = Constant
   // viewRepositoryStats = Function
   const RepositoryItem =  (
      <View key={repItem.id} style={styles.container}>
         <RepositoryItemHeader {... repItem}/>
         {viewRepositoryStats(repItem)}
      </View>
   )

   return(
      RepositoryItem
   )
}



   //JSX style:
   /*
   return(
      <View key={repItem.id} style={styles.container}>
         <StyledText>Id: {repItem.id}</StyledText>
         <StyledText>FullName: {repItem.fullName}</Text>
         etc...
      </View>
   )
   */
