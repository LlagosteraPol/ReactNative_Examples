import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


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

const styles = StyleSheet.create({
   container: {
      padding: 20,
      paddingBottom: 5, 
      paddingTop: 5
   },
   strong: {
      color: '#09f',
      fontWeight: 'bold',
      marginBottom: 5
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

export function viewRepositoryItem(repItem: RepositoryItem){
   return (
      <View key={repItem.id} style={styles.container}>
         <Text style={styles.strong}>id: {repItem.id}</Text>
         <Text>FullName: {repItem.fullName}</Text>
         <Text>Description: {repItem.description}</Text>
         <Text>Language: {repItem.language}</Text>
         <Text>Forks: {repItem.forksCount}</Text>
         <Text>Stars: {repItem.stargazersCount}</Text>
         <Text>Rating: {repItem.ratingAverage}</Text>
         <Text>Review: {repItem.reviewCount}</Text>
         <Text>Avatar: {repItem.ownerAvatarUrl}</Text>
      </View>
   )
}