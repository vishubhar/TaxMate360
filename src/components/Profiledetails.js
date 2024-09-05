import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Profiledetails = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]{3,}$/, 'Must contain at least three alphabets')
      .required('First Name is required'),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]{3,}$/, 'Must contain at least three alphabets')
      .required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Phone Number is required'),
    dob: Yup.string()
      .required('Required')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Invalid date format (DD/MM/YYYY)'),
    panNo: Yup.string().required('Pan Card is required'),
    aadharNo: Yup.string().matches(/^[0-9]{12}$/, 'Must be a valid Aadhar number').required('Aadhar Card is Required'),
    gender: Yup.string().required('Gender is required'), 

  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      panNo: '',
      dob: '',
      aadharNo: '',
      gender: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [userName, setUserName] = useState("Vishal Bhardwaj");
  const [updateDate, setUpdateDate] = useState("21-05-2024");
  const RadioButton = ({ selected }) => (
    <View style={{ height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: '#1E74FD', alignItems: 'center', justifyContent: 'center' }}>
      {selected && <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#1E74FD' }} />}
    </View>
  );
  
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.iconcontainer}>
          <Image
            style={{ height: 70, width: 70, tintColor: 'white' }}
            source={require('../Assets/icons/profile.png')} />
        </View>
        <View style={styles.NameView}>
          <Text style={{ fontSize: 20, color: "#A52A2A", fontWeight: "900" }}>{userName}</Text>
          <Text style={{ fontSize: 16, color: "#A52A2A", fontWeight: "800" }}>Last Updated : {updateDate}</Text>
        </View>
      </View>
      <View style={styles.card2}>
        <View>
          <Text style={{ fontSize: 22, color: "black", fontWeight: "500", paddingBottom: 5,  marginBottom:15}}>Basic Information Details</Text>
        </View>

        <View style={{ display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{ flex:1, marginRight:10 }}>
            <Text style={styles.label}>First Name </Text>
            <TextInput
              style={styles.input}
              value={formik.values.firstName}
              onChangeText={formik.handleChange('firstName')}
              placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Text style={styles.error}>{formik.errors.firstName}</Text>
            )}
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Last Name </Text>
            <TextInput
              style={styles.input}
              value={formik.values.lastName}
              onChangeText={formik.handleChange('lastName')}
              placeholder="Last Name"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <Text style={styles.error}>{formik.errors.lastName}</Text>
            )}
          </View>
        </View>

        <Text style={styles.label}>Email </Text>
        <TextInput
          style={styles.input}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          keyboardType="email-address"
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.error}>{formik.errors.email}</Text>
        )}

        <Text style={styles.label}>Phone Number </Text>
        <TextInput
          style={styles.input}
          value={formik.values.phoneNumber}
          onChangeText={formik.handleChange('phoneNumber')}
          keyboardType="numeric"
          placeholder="Phone Number"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <Text style={styles.error}>{formik.errors.phoneNumber}</Text>
        )}


        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={formik.values.dob}
          onChangeText={formik.handleChange('dob')}
          placeholder="Date of Birth"
        />
        {formik.touched.dob && formik.errors.dob && (
          <Text style={styles.error}>{formik.errors.dob}</Text>
        )}

        <Text style={styles.label}>Gender </Text>
        <View style={{ flexDirection: 'row', margin: 15 ,marginLeft:0, justifyContent:'space-between'}}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => formik.setFieldValue('gender', 'male')}
          >
            <RadioButton selected={formik.values.gender === 'male'} />
            <Text style={{ marginLeft: 5 }}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
            onPress={() => formik.setFieldValue('gender', 'female')}
          >
            <RadioButton selected={formik.values.gender === 'female'} />
            <Text style={{ marginLeft: 5 }}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
            onPress={() => formik.setFieldValue('gender', 'other')}
          >
            <RadioButton selected={formik.values.gender === 'other'} />
            <Text style={{ marginLeft: 5 }}>Other</Text>
          </TouchableOpacity>
        </View>
        {formik.touched.gender && formik.errors.gender && (
          <Text style={styles.error}>{formik.errors.gender}</Text>
        )}

        <Text style={styles.label}>PAN Card Number </Text>
        <TextInput
          style={styles.input}
          value={formik.values.panNo}
          onChangeText={formik.handleChange('panNo')}
          placeholder="PAN No."
        />
        {formik.touched.panNo && formik.errors.panNo && (
          <Text style={styles.error}>{formik.errors.panNo}</Text>
        )}

        <Text style={styles.label}>Aadhar Card Number </Text>
        <TextInput
          style={styles.input}
          value={formik.values.aadharNo}
          onChangeText={formik.handleChange('aadharNo')}
          keyboardType="numeric"
          placeholder="Aadhar No"
        />
        {formik.touched.aadharNo && formik.errors.aadharNo && (
          <Text style={styles.error}>{formik.errors.aadharNo}</Text>
        )}

        <TouchableOpacity onPress={formik.handleSubmit}>
          <View style={[styles.buttonContainer, { backgroundColor: formik.isValid ? '#1E74FD' : '#8EB9FE' }]}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 10
  },
  card: {
    flex:1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    display: "flex",
    flexDirection: "row",
    margin: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  card2: {
    flex:1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    display: "flex",
    margin: 5,
    marginBottom: 30
  },
  iconcontainer: {
    height: 100,
    width: 100,
    backgroundColor: "#1E74FD",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  NameView: {
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 7,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    lineHeight: 15
  },
  input: {
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  buttonContainer: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    fontSize: 11,
    color: 'red',
    marginBottom: 10
  },

})
export default Profiledetails