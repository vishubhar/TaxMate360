import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const NotificationTile = ({ title, description, time, imageSource }) => {
  return (
   
      <TouchableOpacity style={styles.notificationContainer}>
        <View style={styles.notificationContent}>
          <Image style={styles.notificationImage} source={imageSource} />
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>{`Venue: ${title}`}</Text>
            <Text style={styles.notificationDescription}>{description}</Text>
            <Text style={styles.notificationTime}>{time}</Text>
          </View>
        </View>
        <Image
          style={styles.notificationLargeImage}
          source={imageSource}
          resizeMode="cover"
        />
      </TouchableOpacity>
   
  );
};

export default function MyComponent() {
  return (
    <ScrollView style={styles.maincontainer }>
      <NotificationTile
        title="Only on MyITROnline !"
        description="Explore the timeless ADIDAS Samba Collection Wishlist Now"
        time="2 Hours Ago"
        imageSource={require('../Assets/images/Notificationsample.png')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    backgroundColor:'white'
  },
  
  notificationContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin:10,
    elevation:2,
    shadowColor:'black',

  },
  notificationContent: {
    flexDirection: 'row',
  },
  notificationImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 14,
  },
  notificationLargeImage: {
    height: 200,
    width: windowWidth - 40, 
    marginTop: 10,
  },
});
