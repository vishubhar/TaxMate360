import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';


const Menu = ({ navigation }) => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.header}>
        <View style={styles.profilecontainer}>
          <Image
            style={styles.profileImage}
            source={require('../Assets/icons/man.png')}
          />
        </View>
        <Text style={styles.profileName}>Vishubhardwaj1922@gmail.com</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ height: 20, width: 20, tintColor: 'white', marginRight: 10 }}
            source={require('../Assets/icons/close-outline.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 15, tintColor: 'white', }}
              source={require('../Assets/icons/profile.png')} />
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionItem}
              onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.text}>Account Details</Text>
              <Image
                style={{ height: 20, width: 15, tintColor: 'grey' }}
                source={require('../Assets/icons/arrowforward.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 25, width: 25, tintColor: 'white' }}
              source={require('../Assets/icons/support.png')} />
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionItem}
              onPress={() => navigation.navigate('Pay Consulting Fees')}>
              <Text style={styles.text}>Help And Support</Text>
              <Image
                style={{ height: 20, width: 15, tintColor: 'grey' }}
                source={require('../Assets/icons/arrowforward.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 20, tintColor: 'white' }}
              source={require('../Assets/icons/star.png')} />
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionItem}
              onPress={() => navigation.navigate('Upload Form-16')}>
              <Text style={styles.text}>Give Us Feedback</Text>
              <Image
                style={{ height: 20, width: 15, tintColor: 'grey' }}
                source={require('../Assets/icons/arrowforward.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 20, tintColor: 'white' }}
              source={require('../Assets/icons/rocket.png')} />
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionItem}
              onPress={() => navigation.goBack()}>
              <Text style={styles.text}>App Update</Text>
              <Image
                style={{ height: 20, width: 15, tintColor: 'grey' }}
                source={require('../Assets/icons/arrowforward.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 20, tintColor: 'white' }}
              source={require('../Assets/icons/share.png')} />
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionItem}
              onPress={() => navigation.navigate('Generate Rent Receipt')}>
              <Text style={styles.text}>Share This App</Text>
              <Image
                style={{ height: 20, width: 15, tintColor: 'grey' }}
                source={require('../Assets/icons/arrowforward.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 15, width: 15, tintColor: 'white' }}
              source={require('../Assets/icons/exit.png')} />
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionItem}
              onPress={() => navigation.navigate('Forget Password')}>
              <Text style={styles.text}>Logout</Text>
              <Image
                style={{ height: 20, width: 15, tintColor: 'grey' }}
                source={require('../Assets/icons/arrowforward.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    width: '90%',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E74FD'
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  profileName: {
    flex: 2,
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    padding: 10,
    paddingLeft: 0,
  },
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  sectionItem: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    padding: 15,
    paddingLeft: 0,
    justifyContent: "space-between"

  },
  text: {
    color: "black"
  },
  logoutButton: {
    borderWidth: 1.5,
    borderColor: "red",
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: 'red',
    fontWeight: '500',
    lineHeight: 20
  },

  listContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconcontainer: {
    height: 40,
    width: 40,
    backgroundColor: "#1E74FD",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  profilecontainer: {
    height: 40,
    width: 40,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 20
  }
});
export default Menu;
