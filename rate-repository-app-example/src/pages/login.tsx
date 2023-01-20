import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { Formik } from 'formik' //Library to create forms easily

const initialValues = {
   email: '',
   password: ''
}

export default function LogInPage (){
   return <Formik initialValues={initialValues} onSubmit = 
   {values => console.log(values)}>
      {( {handleChange, handleSubmit, values} ) => {
         return (
            <View>
               <TextInput 
                  placeholder = 'E-mail'
                  value = {values.email}
                  onChangeText={handleChange('email')}
               />
               <TextInput 
                  placeholder = 'Password'
                  value = {values.password}
                  onChangeText={handleChange('password')}
               />
            </View>
         )
      }}
   </Formik>
}