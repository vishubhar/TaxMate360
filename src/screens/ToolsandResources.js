import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const ToolsandResources = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.mainText}>Tools & Guide</Text>
        <View style={styles.tileContainer}>
          <LinearGradient
            style={styles.tile}
            colors={['#EEF5FF', '#EEF5FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image
                style={{ height: 40, width: 41, tintColor: '#006DEA' }}
                source={require('../Assets/icons/calculator.png')}
              />
              <Text style={{ fontSize: 18, textAlign: "center", color: "black", paddingTop: 15, fontWeight: '700' }}>Income Tax Calculator</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.tile}
            colors={['#EEF5FF', '#EEF5FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image
                style={{ height: 40, width: 41, tintColor: '#32A682' }}
                source={require('../Assets/icons/calculator.png')}
              />
              <Text style={{ fontSize: 18, textAlign: "center", color: "black", paddingTop: 15, fontWeight: '700' }}>80TTA Calculator</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.tile}
            colors={['#EEF5FF', '#EEF5FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
              <Image
                style={{ height: 40, width: 41, tintColor: '#006DEA' }}
                source={require('../Assets/icons/calculator.png')}
              />
              <Text style={{ fontSize: 18, textAlign: "center", color: "black", paddingTop: 15, fontWeight: '700' }}>GST Calculator</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.tile}
            colors={['#EEF5FF', '#EEF5FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
              <Image
                style={{ height: 40, width: 41, tintColor: '#32A682' }}
                source={require('../Assets/icons/calculator.png')}
              />
              <Text style={{ fontSize: 18, textAlign: "center", color: "black", paddingTop: 15, fontWeight: '700' }}>80D Calculator</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.tile}
            colors={['#EEF5FF', '#EEF5FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
              <Image
                style={{ height: 40, width: 41, tintColor: '#006DEA' }}
                source={require('../Assets/icons/calculator.png')}
              />
              <Text style={{ fontSize: 18, textAlign: "center", color: "black", paddingTop: 15, fontWeight: '700' }}>HRA Calculator</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.tile}
            colors={['#EEF5FF', '#EEF5FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
              <Image
                style={{ height: 40, width: 41, tintColor: '#32A682' }}
                source={require('../Assets/icons/calculator.png')}
              />
              <Text style={{ fontSize: 18, textAlign: "center", color: "black", paddingTop: 15, fontWeight: '700' }}>EMI Calculator</Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>

      </View>

      <View style={styles.section2}>
        <Text style={styles.mainText}>Blogs & Guide</Text>

        <View style={styles.bottomTiles}>
          <TouchableOpacity style={[styles.tile2]}>
            <View style={styles.firstView}>
              <Text style={[styles.headingText, { marginBottom: 25 }]}>Blog</Text>
              <Text style={styles.bottomText2}>Know More...</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../Assets/icons/message.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile2]}>
            <View style={styles.firstView}>
              <Text style={[styles.headingText, { marginBottom: 25 }]}>Guide</Text>
              <Text style={styles.bottomText2}>Know More...</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../Assets/icons/guide-book.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  section1: {
    padding: windowWidth * 0.04,
  },
  section2: {
    padding: windowWidth * 0.05,
    backgroundColor: '#F8F9FD',
  },
  tile2: {
    height: windowWidth * 0.25,
    width: windowWidth * 0.43,
    marginTop: windowWidth * 0.02,
    borderRadius: windowWidth * 0.05,
    flexDirection: 'row',
    padding: windowWidth * 0.02,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: windowWidth * 0.02,
  },
  bottomTiles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: windowWidth * 0.06,
    color: 'black',
    fontWeight: '500',
    letterSpacing: 0.2,
    paddingLeft: windowWidth * 0.02,
  },
  headingText: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: '700',
    letterSpacing: 0.1,
    lineHeight: windowWidth * 0.08,
  },
  bottomText: {
    fontSize: 20,
    textAlign: "center",
    marginLeft: windowWidth * 0.025,
    marginRight: windowWidth * 0.025,
    fontWeight: 'bold',
    color: 'black'
  },
  bottomText2: {
    fontSize: 12,
    lineHeight: windowWidth * 0.04,
    margin: windowWidth * 0.005,

  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.15,
    backgroundColor: '#E0F7F5',
    borderRadius: windowWidth * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth * 0.02,
    marginRight: 0,
  },
  icon: {
    height: windowWidth * 0.10,
    width: windowWidth * 0.10,
  },
  tileContainer: {
    flex: 1,
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  tile: {
    width: windowWidth / 2 - 40,
    height: windowWidth / 3,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "center"
  },
});

export default ToolsandResources