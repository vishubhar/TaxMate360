import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';

const Profile = ({ navigation }) => {
  const handleShareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app!',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared via ${result.activityType}`);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing app:', error.message);
    }
  };
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilecontainer}>
          <Image
            style={styles.profileImage}
            source={require('../Assets/icons/profile.png')}
          />
        </View>
        <Text style={styles.profileName}>Vishubhardwaj1922@gmail.com</Text>
      </View>

      {/* Starting of Menu List */}
      <Text style={{ fontSize: 13, color: "black", lineHeight: 25, marginBottom: 10 }}>Account Actions</Text>

      {/* List Items */}
      <View style={styles.listContainer}>
        <View style={styles.iconcontainer}>
          <Image
            style={{ height: 20, width: 15, tintColor: 'white'}}
            source={require('../Assets/icons/profile.png')} />
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionItem}
            onPress={() => navigation.navigate('Profile Settings')}>
            <Text style={styles.text}>Profile</Text>
            <Image
              style={{ height: 20, width: 15, tintColor: 'grey' }}
              source={require('../Assets/icons/arrowforward.png')} />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.listContainer}>
        <View style={styles.iconcontainer}>
          <Image
            style={{ height: 20, width: 20, tintColor: 'white'}}
            source={require('../Assets/icons/shopping_cart.png')} />
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionItem}
            onPress={() => navigation.navigate('My Orders')}>
            <Text style={styles.text}>My Orders</Text>
            <Image
              style={{ height: 20, width: 15, tintColor: 'grey' }}
              source={require('../Assets/icons/arrowforward.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.iconcontainer}>
          <Image
            style={{ height: 25, width: 25, tintColor: 'white'}}
            source={require('../Assets/icons/support.png')} />
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionItem}
            onPress={() => navigation.navigate('Help and Support')}>
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
            style={{ height: 20, width: 20, tintColor: 'white'}}
            source={require('../Assets/icons/star.png')} />
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionItem}
            onPress={() => navigation.navigate('Feedback')}>
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
            style={{ height: 20, width: 20, tintColor: 'white'}}
            source={require('../Assets/icons/share.png')} />
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionItem}
            onPress={handleShareApp}>
            <Text style={styles.text}>Share This App</Text>
            <Image
              style={{ height: 20, width: 15, tintColor: 'grey' }}
              source={require('../Assets/icons/arrowforward.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    tintColor: 'white'
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    color:'black'
  },
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  sectionItem: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    padding: 15,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
    marginBottom: 20
  },
  profilecontainer: {
    height: 100,
    width: 100,
    backgroundColor: "#1E74FD",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
export default Profile;
