import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, Text, Button } from 'react-native';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToITRFilling = () => {
    navigation.navigate('ITR Filing');
  };
  const navigateToGST = () => {
    navigation.navigate('GST');
  };
  const navigateToBusinessStartup = () => {
    navigation.navigate('Business Startup');
  };
  const navigateToTools = () => {
    navigation.navigate('Tax Tools');
  };

  return (
    <View style={styles.container} >
      <Header />
      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={navigateToITRFilling}>
          <LinearGradient
            style={styles.tile}
            colors={['#FF6B6B', '#4B6CB7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.firstview}>
              <Text style={styles.mainText}>
                ITR Filing and
              </Text>
              <Text style={styles.mainText}>
                Tax Consulting Services
              </Text>
              <TouchableOpacity style={styles.button} onPress={navigateToITRFilling}>
                <Text style={styles.buttontext}>File Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imagecont}>
              <Image
                style={styles.image1}
                source={require('../Assets/images/tax-bill.png')}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToGST}>
          <LinearGradient
            style={styles.tile}
            colors={['#BCDF3B', '#55C0F6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.firstview}>
              <Text style={styles.mainTextblack}>
                GST Filing and
              </Text>
              <Text style={styles.mainTextblack}>
                GST Consulting Services
              </Text>
              <TouchableOpacity style={styles.button} onPress={navigateToGST}>
                <Text style={styles.buttontext}>File Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imagecont}>
              <Image
                style={styles.image}
                source={require('../Assets/images/GST.png')}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToBusinessStartup}>
          <LinearGradient
            style={styles.tile}
            colors={['#FFD700', '#FF4500']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.firstview}>
              <Text style={styles.mainText}>
                Buisness Startup and
              </Text>
              <Text style={styles.mainText}>
                Trademark Reagistration
              </Text>
              <TouchableOpacity style={styles.button} onPress={navigateToBusinessStartup}>
                <Text style={styles.buttontext}>Book Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imagecont}>
              <Image
                style={styles.image}
                source={require('../Assets/images/partners.png')}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToTools}>
          <LinearGradient
            style={styles.tile}
            colors={['#40E0D0', '#8A2BE2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.firstview}>
              <Text style={styles.mainTextblack}>
                Tools and Resources
              </Text>
              <Text style={styles.mainTextblack}>
                Guide
              </Text>
              <TouchableOpacity style={styles.button} onPress={navigateToTools}>
                <Text style={styles.buttontext}>Tax Tool</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imagecont}>
              <Image
                style={styles.image}
                source={require('../Assets/images/graphic-designer.png')}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttontext: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: .1,
    lineHeight: 22
  },
  tile: {
    width: windowWidth - 20,
    height: windowWidth / 2 - 30,
    margin: 5,
    borderRadius: 25,
    display: 'flex',
    flexDirection: "row",
    padding: 25,
    paddingBottom: 0,
    justifyContent: "space-between",
  },
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 5,
    paddingBottom: 40,
    paddingTop: 10,
  },
  mainText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '900',
    letterSpacing: .1,
    lineHeight: 22,
  },
  mainTextblack: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
    letterSpacing: .1,
    lineHeight: 22,
  },
  button: {
    marginTop: 30,
    backgroundColor: "black",
    padding: 8,
    width: 130,
    alignItems: "center",
    borderRadius: 13
  },
  imagecont: {
    margin: 0
  },
  image: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.4,
    resizeMode: 'contain',
  },
  image1:{
    width: windowWidth / 3,
    height: windowWidth / 3,
    resizeMode: 'contain',
    marginLeft:10,
    marginTop:-10
  }
});

export default HomeScreen;
