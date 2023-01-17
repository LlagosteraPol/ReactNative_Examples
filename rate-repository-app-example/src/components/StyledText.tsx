import React from 'react'
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
   text: {
      fontSize: 12,
      color: 'grey'
   },
   bold: {
      fontWeight: 'bold'
   },
   blue: {
      color: 'blue'
   },
   big: {
      fontSize: 20
   },
   small: {
      fontSize: 10
   }
})

export default function styledText(blue: boolean, bold: boolean, children: boolean, big: boolean, small: boolean){
   const textStyles = [
      styles.text,
      blue && styles.blue, //short circuit: if blue is 'false' it doesn't apply the style, otherwise it apply the style defined in 'styles'
      big && styles.big,
      small && styles.small,
      bold && styles.bold
   ]
   return (
      <Text style = {textStyles}
   )

}