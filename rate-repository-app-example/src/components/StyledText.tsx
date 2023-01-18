import React from 'react'
import {Text, StyleSheet, TextStyle, ViewStyle, StyleProp, ColorValue} from 'react-native'
import theme from '../theme'


type StyleText = {
   text: TextStyle,
   colorPrimary: TextStyle,
   colorSecondary: TextStyle,
   bold: TextStyle,
   subheading: TextStyle,
   align: TextStyle
}



const styles = StyleSheet.create<StyleText>({
   text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal
   },
   colorPrimary: {
      color: theme.colors.primary
   },
   colorSecondary: {
      color: theme.colors.textSecondary
   },
   bold: {
      fontWeight: theme.fontWeights.bold
   },
   subheading: {
      fontSize: theme.fontSizes.subheading
   },
   align: {
      textAlign: 'center'
   }
})

export default function styledText({children, color, fontSize,  fontWeight, style, align, ... restOfProps}:
   {children?:string, color?:string, fontSize?:string,  fontWeight?:string, style?:string, align?:string, restOfProps?: number[]}){
   const textStyles = [
      styles.text,
      (color == 'primary' ? styles.colorPrimary:{}), //short circuit: if blue is 'false' it doesn't apply the style, otherwise it apply the style defined in 'styles'
      (color == 'secondary' ? styles.colorSecondary:{}), 
      (fontSize == 'subheading' ? styles.subheading:{}),
      (fontWeight == 'bold' ? styles.bold:{}),
      (align == 'center' ? styles.colorPrimary:{}),
      style
   ]
   //TODO: Fix this
   return (
      <Text style = {textStyles} {... restOfProps}>
         {children}
      </Text>
   )

}

/*
// Old
export default function styledText({blue, bold, children, big, small}:{blue?:boolean, bold?:boolean, children?:string, big?:boolean, small?:boolean}){
   const textStyles = [
      styles.text,
      (blue ? styles.blue:{}), //short circuit: if blue is 'false' it doesn't apply the style, otherwise it apply the style defined in 'styles'
      (big ? styles.big:{}),
      (small ? styles.small:{}),
      (bold ? styles.bold:{})
   ]
   return (
      <Text style = {textStyles}>
         {children}
      </Text>
   )

}
*/

/*
////JSX style
export default function styledText({blue, bold, children, big, small}){
   const textStyles = [
      styles.text,
      blue && styles.blue, //short circuit: if blue is 'false' it doesn't apply the style, otherwise it apply the style defined in 'styles'
      big && styles.big,
      small && styles.small,
      bold && styles.bold
   ]
   return (
      <Text style = {textStyles}>
         {children}
      </Text>
   )

}
*/