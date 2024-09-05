import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function ForgetPassword() {
    const [email,setEmail]=useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>We'll check if you have an account, and help to create one if you don't</Text>
      
      <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Pre-Existing Email"
            />
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Send OTP</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        backgroundColor:'#F9F9F9'
    },
    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        padding:12,
        width:100,
        backgroundColor:"#34C759",
        borderRadius:8,
    },
    btnText:{
        textAlign:"center",
        color:"white",
        fontWeight:"600"
    },
    headertext:{
        color:"black",
        lineHeight:20,
        marginBottom:20
    },
    
    label: {
        fontSize: 15,
        marginLeft:3,
        fontWeight: "400",
        color: 'black'
    },
    input: {
        height: 40,
        borderBottomWidth: .5,
        borderBottomColor: 'gray',
        marginBottom: 10
    },
})