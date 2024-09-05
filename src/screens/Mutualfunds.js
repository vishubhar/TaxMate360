import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Mutualfunds = () => {
  return (
    <View style={styles.mainconatainer}>
        <Header/>
      <Text>Mutualfunds</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    mainconatainer:{
        flex:1,
        backgroundColor:'white'
    }
})
export default Mutualfunds