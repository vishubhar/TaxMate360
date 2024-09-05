import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const GSTScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.mainText}>GST Filing</Text>
        <View style={styles.flexContainer}>
          <LinearGradient
            style={styles.gradientContainer}
            colors={['#FFECEE', '#FFF5F6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Image
              style={styles.icon}
              source={require('../Assets/images/upload-GST.png')}
            />
            <TouchableOpacity>
              <Text style={styles.button}>File GST</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>
              Upload your form 16 and get your ITR prepared automatically
            </Text>
          </LinearGradient>

          <LinearGradient
            style={styles.gradientContainer}
            colors={['#E0F7F5', '#F6FBFE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Image
              style={styles.icon}
              source={require('../Assets/images/customer-service.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Pay Consulting Fees')}
            >
              <Text style={styles.button2}>Hire eCA</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>
              Effortlessly file your tax returns with the help of our eCA
            </Text>
          </LinearGradient>
        </View>
      </View>

      <View style={styles.section2}>
        <Text style={styles.mainText}>Tools</Text>

        <View style={styles.tile}>
          <View style={styles.firstView}>
            <Text style={styles.headingText}>GST Calculator</Text>
            <Text style={styles.bottomText2}>Free Income Tax Calculator</Text>
            <TouchableOpacity>
              <Text style={styles.button}>Calculate Tax</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../Assets/icons/GSTcalc.png')}
            />
          </View>
        </View>

        <View style={styles.tile}>
          <View style={styles.firstView}>
            <Text style={styles.headingText}>HSN Code Finder</Text>
            <Text style={styles.bottomText2}>Free Income Tax Calculator</Text>
            <TouchableOpacity>
              <Text style={styles.button}>Find HSN Code</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../Assets/icons/Hsn-Finder.png')}
            />
          </View>
        </View>

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
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  section1: {
    padding: windowWidth * 0.02,
  },
  tile: {
    width: windowWidth - windowWidth * 0.1,
    height: windowWidth / 4 + 10,
    marginTop: windowWidth * 0.02,
    borderRadius: windowWidth * 0.05,
    flexDirection: 'row',
    padding: windowWidth * 0.05,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: windowWidth * 0.02,
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
  section2: {
    padding: windowWidth * 0.05,
    backgroundColor: '#F8F9FD',
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
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.025,
    paddingRight: windowWidth * 0.025,
  },
  gradientContainer: {
    borderRadius: windowWidth * 0.05,
    padding: windowWidth * 0.025,
    paddingLeft: 0,
    paddingRight: 0,
    width: windowWidth / 2 - windowWidth * 0.07,
    height: windowWidth / 2 - windowWidth * 0.1,
    alignItems: 'center',
    elevation: 3,
  },
  bottomText: {
    fontSize:10,
    marginLeft: windowWidth * 0.025,
    marginRight: windowWidth * 0.025,
    fontWeight: 'bold',
    color:'black'
  },
  bottomText2: {
    fontSize:12,
    lineHeight: windowWidth * 0.04,
    margin: windowWidth * 0.005,

  },
  button: {
    textAlign: 'center',
    padding: windowWidth * 0.015,
    margin: windowWidth * 0.02,
    marginLeft:0,
    width: windowWidth * 0.35,
    height: windowWidth * 0.075,
    backgroundColor: '#DF7166',
    borderRadius: windowWidth * 0.0375,
    color: 'white',
    fontWeight: 'bold',
  },
  button2: {
    textAlign: 'center',
    padding: windowWidth * 0.015,
    margin: windowWidth * 0.02,
    width: windowWidth * 0.35,
    height: windowWidth * 0.075,
    backgroundColor: '#BED830',
    borderRadius: windowWidth * 0.0375,
    color: 'black',
    fontWeight: 'bold',
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
});

export default GSTScreen;
