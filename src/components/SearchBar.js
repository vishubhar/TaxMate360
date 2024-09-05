import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import SearchableDropdown from 'react-native-searchable-dropdown';


export default function SearchBar(props) {
  const [products, setProducts] = useState([]);

  const [searchItems, setSearchItems] = useState([]);
  const navigation = useNavigation();

  const navigateToMenuScreen = () => {
    navigation.navigate('HomeScreen');
  };
  const handleProductPress = (product) => {
    navigation.navigate("productdetail", { product: product });
  };
  return (
    <View style={styles.search}>
      <Image
        style={{ height: 20, width: 20, }}
        source={require('../Assets/icons/searchleft.png')} />
      <View style={styles.inputContainer}>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          onItemSelect={(item) => handleProductPress(item)}
          defaultIndex={0} a
          containerStyle={{
            borderRadius: 5,
            width: "100%",
            position: "absolute",
            maxHeight: 300,
            backgroundColor: "white",
          }}
          textInputStyle={{
            borderRadius: 10,
            padding: 6,
            paddingLeft: 10,
            borderWidth: 0,
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: "black",
            borderColor: "black",
          }}
          itemTextStyle={{
            color: "black",
          }}
          itemsContainerStyle={{
            maxHeight: "100%",
          }}
          items={searchItems}
          placeholder="Search..."
          resetValue={false}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.upperImage}
          source={require('../Assets/icons/close-outline.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center',
    height: height * 0.06,
    borderRadius: 250,
    margin: 10,
    borderWidth: 1.5,
    borderColor: "black",

  },
  upperImage: {
    height: 30,
    width: 30
  },
  inputContainer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});