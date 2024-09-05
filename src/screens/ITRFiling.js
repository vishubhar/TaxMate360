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
const windowHeight = Dimensions.get('window').height;

const ITRFiling = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.mainText}>Tax Services</Text>
        <View style={styles.flexContainer}>
          <LinearGradient
            style={styles.gradientContainer}
            colors={['#EBE9FF', '#F4F1FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Image
              style={styles.icon}
              source={require('../Assets/images/upload-file.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Upload Form-16')}
            >
              <Text style={styles.button}>Upload Form 16</Text>
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
              <Text style={styles.button}>Hire eCA</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>
              Effortlessly file your tax returns with the help of our eCA
            </Text>
          </LinearGradient>
        </View>
      </View>

      <View style={styles.section2}>
        <Text style={styles.mainText}>Tax Tools Trending</Text>

        <View style={styles.tile}>
          <View style={styles.firstView}>
            <Text style={styles.headingText}>Generate Rent Receipts</Text>
            <Text style={styles.bottomText2}>
              Myitronline is an easy-to-use rent Receipt generator online tool
              that helps you to produce rent receipts
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Generate Rent Receipt')}
            >
              <Text style={styles.button}>Generate Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../Assets/icons/payment.png')}
            />
          </View>
        </View>

        <View style={styles.tile}>
          <View style={styles.firstView}>
            <Text style={styles.headingText}>Generate Form 12BB</Text>
            <Text style={styles.bottomText2}>
              Myitronline is an easy-to-use rent Receipt generator online tool
              that helps you to produce rent receipts
            </Text>
            <TouchableOpacity>
              <Text style={styles.button}>Generate Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../Assets/icons/form.png')}
            />
          </View>
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
    padding: 10,
    flex: 1,
  },
  tile: {
    width: windowWidth - 40,
    height: windowWidth / 2 - 40,
    marginTop: windowHeight * 0.02,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 0,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
  },
  section2: {
    flex: 2,
    padding: windowWidth * 0.05,
    backgroundColor: '#F8F9FD',
  },
  mainText: {
    fontSize: windowWidth * 0.06,
    color: 'black',
    fontWeight: '500',
    letterSpacing: 0.2,
    paddingLeft: 10,
  },
  headingText: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: '700',
    letterSpacing: 0.1,
    lineHeight: windowHeight * 0.03,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.025,
    paddingRight: windowWidth * 0.025,
  },
  gradientContainer: {
    borderRadius: 10,
    padding: windowWidth * 0.025,
    backgroundColor: 'lightblue',
    width: windowWidth / 2 - windowWidth * 0.08,
    height: windowWidth / 2 - windowWidth * 0.04,
    alignItems: 'center',
    elevation: 3,
  },
  bottomText: {
    fontSize: 10,
    color: 'black',
    marginLeft: windowWidth * 0.025,
    marginRight: windowWidth * 0.025,
    fontWeight: 'bold',
  },
  bottomText2: {
    fontSize: 11,
  },
  button: {
    textAlign: 'center',
    padding: windowWidth * 0.0125,
    margin: windowWidth * 0.02,
    width: windowWidth * 0.35,
    height: windowWidth * 0.075,
    backgroundColor: '#373998',
    borderRadius: windowWidth * 0.0375,
    color: 'white',
    fontWeight: 'bold',
  },
  firstView: {
    flex: 0.9,
  },
  icon: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.15,
  },
});

export default ITRFiling;
