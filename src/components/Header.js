import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [notificationCount, setNotificationCount] = useState(0);

  const navigateToMenuScreen = () => {
    navigation.navigate('SearchBar');
  };

  const navigateToNotificationScreen = () => {
    setNotificationCount(0);
    navigation.navigate('Notification Screen');
  };

  const receiveNotification = () => {
    setNotificationCount(notificationCount + 1);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{height: 55, width: 210, margin: 5, resizeMode: 'stretch'}}
          source={require('../Assets/logo/TaxMate360.png')}
        />
      </View>
      <View style={styles.rightassets}>
        <TouchableOpacity
          onPress={navigateToMenuScreen}
          style={styles.headerIconCont}>
          <Image
            style={{height: 30, width: 30, tintColor: '#000'}}
            source={require('../Assets/icons/search.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigateToNotificationScreen}
          style={[
            styles.headerIconCont,
            notificationCount > 0 && styles.notificationIcon,
          ]}>
          <Image
            style={{height: 30, width: 30, tintColor: '#000'}}
            source={require('../Assets/icons/notification.png')}
          />
          {notificationCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={{color: 'white'}}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 65,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerIconCont: {
    height: 40,
    width: 40,
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: 'black',
    marginRight: 15,
    backgroundColor: 'transparent',
  },
  notificationIcon: {
    backgroundColor: 'lightblue',
  },
  notificationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 1,
    height: 15,
    width: 10,
  },
  rightassets: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default Header;
