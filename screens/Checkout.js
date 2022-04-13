import React, { useState } from "react"
import { Colors } from "../styles";
import { SafeAreaView, View, ScrollView, TouchableHighlight, Text, TextInput, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Formik } from "formik";
import * as yup from 'yup'
import {AuthConsumer} from "../contexts/Auth.context"


const CheckoutScreen = ({navigation, route, store:{currentUser}}) => {

  const { products, totalPrice, currency } = route.params;

  const { lastname, firstname, details} = currentUser.data;
  

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <ScrollView 
      style={styles.container}
    >
      <SafeAreaView style={styles.scrollContainer}>
      <View style={styles.formWrapper}>
        <Formik
          initialValues={{
            fname: firstname,
            lname: lastname,
            email: '',
            address: '',
            ccard: '',
            ecard: '',
            ncard: '' ,
            cvvcard: ''
          }}
          validationSchema={checkoutValidationSchema}
          onSubmit={onSubmit}
         >
           {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
             <View>
               <TextInput
                 style={styles.TextInput}
                 placeholder="First Name"
                 onChangeText={handleChange('fname')}
                 onBlur={handleBlur('fname')}
                 value={values.fname}
               />
               {
                 errors.fname && <Text style={styles.errorMessage}>{errors.fname}</Text>
               }
               <TextInput
                 style={styles.TextInput}
                 placeholder="Last Name"
                 onChangeText={handleChange('lname')}
                 onBlur={handleBlur('lname')}
                 value={values.lname}
               />
               {
                 errors.lname && <Text style={styles.errorMessage}>{errors.lname}</Text>
               }
               <TextInput
                 style={styles.TextInput}
                 placeholder="Email"
                 onChangeText={handleChange('email')}
                 onBlur={handleBlur('email')}
                 value={values.email}
               />
               {
                 errors.email && <Text style={styles.errorMessage}>{errors.email}</Text>
               }
               <TextInput
                 style={styles.TextInput}
                 placeholder="Address"
                 onChangeText={handleChange('address')}
                 onBlur={handleBlur('address')}
                 value={values.address}
               />
               {
                 errors.address && <Text style={styles.errorMessage}>{errors.address}</Text>
               }
               <View style={styles.separator}/>
               <TextInput
                 style={styles.TextInput}
                 placeholder="Credit Card Number"
                 onChangeText={handleChange('ccard')}
                 onBlur={handleBlur('ccard')}
                 value={values.ccard}
               />
               {
                 errors.ccard && <Text style={styles.errorMessage}>{errors.ccard}</Text>
               }
               <TextInput
                 style={styles.TextInput}
                 placeholder="Name on cart"
                 onChangeText={handleChange('ncard')}
                 onBlur={handleBlur('nccard')}
                 value={values.ncard}
               />
               {
                 errors.ncard && <Text style={styles.errorMessage}>{errors.ncard}</Text>
               }
               <TextInput
                 style={styles.TextInput}
                 placeholder="Expires date"
                 onChangeText={handleChange('ecard')}
                 onBlur={handleBlur('ecard')}
                 value={values.ecard}
               />
               {
                 errors.ecard && <Text style={styles.errorMessage}>{errors.ecard}</Text>
               }
               <TextInput
                 style={styles.TextInput}
                 placeholder="CVV"
                 onChangeText={handleChange('cvvcard')}
                 onBlur={handleBlur('cvvcard')}
                 value={values.cvvcard}
               />
               {
                 errors.cvvcard && <Text style={styles.errorMessage}>{errors.cvvcard}</Text>
               }
               <TouchableHighlight style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Pay {totalPrice}{currency}</Text>
               </TouchableHighlight>
             </View>
           )}
        </Formik>
      </View>
    </SafeAreaView>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(3)
  },
  formWrapper: {
    width: "100%",
    maxWidth: 250,
  },
  TextInput: {
    backgroundColor: Colors.snow,
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 14,
    marginVertical: 8,
    padding: 8
  },
  button: {
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    padding: 8,
    fontSize: 18,
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    height: 2,
    width: "100%",
    maxWidth: 250,
    marginVertical: 12,
    backgroundColor: Colors.gray,
  },
  errorMessage: {
    color: Colors.red,
    fontSize: 14
  }
});

const checkoutValidationSchema = yup.object().shape({
  fname: yup
    .string()
    .min(3)
    .max(10)
    .required('First name is Required'),
  lname: yup
    .string()
    .min(3)
    .max(10)
    .required('Last name is Required'),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  address: yup
    .string()
    .min(3)
    .max(10)
    .required('Adress value is Required'),
  ccard: yup
    .number("please enter a valid value")
    .max(16)
    .required('Card number value is Required'),
  ncard: yup
    .string()
    .required('Name of the card owner is Required'),
  ecard: yup.
    string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
    /([0-9]{2})\/([0-9]{2})/,
    'Not a valid expiration date. Example: MM/YY'
    )
    .required('Expiration date is required'),
    cvvcard: yup.
      string()
      .min(3)
      .max(4)
      .required('CVV date is required'),
    
})
export default AuthConsumer(CheckoutScreen);
