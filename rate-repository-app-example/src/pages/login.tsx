import React from 'react'
import { StyleSheet, View, TextInput, Text, Button , GestureResponderEvent} from 'react-native'
import { Formik, useField } from 'formik' //Library to create forms easily // Alternative -> 'ReactHookForms'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
   email: '',
   password: ''
}

const styles = StyleSheet.create({
   error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 20,
      marginTop: -5
   },
   form: {
      margin:12
   }
})


const FormikInputValue = ({ name, ... props }) => {
   // 'useFiled' is a hook returns an array of 3 positions, the value of the given field, 
   // the metainformation of the field, and the helpers (for instance to how to update the field)
   const [field, meta, helpers] = useField(name) 
   return(
      <>
         <StyledTextInput 
            error = {meta.error}
            value = {field.value}
            onChangeText={value => helpers.setValue(value)}
            {... props}
         />
         {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
      </>
   )
}

/* // Manual validation
const validate = values => {
   const errors = {}

   if(!values.email){
      errors.email = 'Email is required'
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,4}$/i.test(values.email)){ //regex to check the validity of the e-mail address
      errors.email = 'Invalid email address'
   }

   console.log(errors)

   return errors
}
*/


export default function LogInPage (){
   // TODO: Fix Button 'onPress' with a better solution

   //If manual validation use <Formik validate={validate} ...
   return <Formik validationSchema={loginValidationSchema} initialValues=
   {initialValues} onSubmit = {values => console.log(values)}>
      {( {handleSubmit} ) => {
         return (
            <View style={styles.form}>
               <FormikInputValue 
                  name = 'email'
                  placeholder = 'E-mail'
               />
               <FormikInputValue 
                  name = 'password'
                  placeholder = 'Password'
                  secureTextEntry
               />
               <Button onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void} title='Log In' />
            </View>
         )
      }}
   </Formik>
}