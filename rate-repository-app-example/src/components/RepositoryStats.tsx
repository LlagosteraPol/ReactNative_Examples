import React from 'react'
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import {RepositoryItem} from './RepositoryItem'


export function parseThousands(value:number){
   return value >= 1000 ? (Math.round(value/100) / 10).toString() + 'k' : value.toString();
}



export function viewRepositoryStats(repItem: RepositoryItem){
   const RepositoryStats = (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <View>
            <StyledText align='center' fontWeight='bold'>{parseThousands(repItem.stargazersCount)}</StyledText>
            <StyledText align='center' >Stars</StyledText>
         </View>

         <View>
            <StyledText align='center' fontWeight='bold'>{parseThousands(repItem.forksCount)}</StyledText>
            <StyledText align='center' >Forks</StyledText>
         </View>

         <View>
            <StyledText align='center' fontWeight='bold'>{(repItem.reviewCount).toString()}</StyledText>
            <StyledText align='center' >Review</StyledText>
         </View>

         <View>
            <StyledText align='center' fontWeight='bold'>{(repItem.ratingAverage).toString()}</StyledText>
            <StyledText align='center' >Rating</StyledText>
         </View>
      </View>
   )

   return (
      RepositoryStats
   )
}