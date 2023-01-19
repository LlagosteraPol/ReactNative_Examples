
import {ColorValue, TextStyle} from 'react-native'
import CSS from 'csstype';

type Theme = {
   appBar: {
      primary: ColorValue,
      textSecondary: ColorValue,
      textPrimary: ColorValue
   },
   colors: {
      textPrimary: ColorValue,
      textSecondary: ColorValue,
      primary: ColorValue,
      white: ColorValue
   },
   fontSizes: {
      body: number,
      subheading: number
   },
   fonts: {
      main: string
   },
   fontWeights:{
      normal: "400" | "700" | "normal" | "bold" | "100" | "200" | "300" | "500" | "600" | "800" | "900" | undefined,
      bold: "400" | "700" | "normal" | "bold" | "100" | "200" | "300" | "500" | "600" | "800" | "900" | undefined
   }
}

const theme: Theme = {
   appBar: {
      primary: '#24292e',
      textSecondary: '#888',
      textPrimary: '#fff'
   },
   colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      white: '#fff'
   },
   fontSizes: {
      body: 14,
      subheading: 16
   },
   fonts: {
      main: 'System'
   },
   fontWeights: {
      normal: '400',
      bold: '700'
   }
}

export default theme