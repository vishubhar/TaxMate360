import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const TaxTools = () => {
  const navigation = useNavigation();

  const navigateToDetailScreen = () => {
    // can change the name of screens you want to make it to navigate on touching the image
    navigation.navigate('HomeScreen');
  };
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainconatainer}>
        <View style={styles.section}>
          <Text style={styles.title}>Tax Calculators and Much More</Text>
          <Text style={styles.subtitle}>
            Welcome to TaxMate360 Tax and Financial Calculators that will help
            to save more
          </Text>
        </View>
        <View style={styles.tileContainer}>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/Income-Tax.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                Income Tax
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/Old-New.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                New & Old Tax
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/HRA.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                H.R.A
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/hsn.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                HSN Code
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/IFSC.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                IFSC Code
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/rent.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                Rent Receipt
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/12bbcalculator.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                Form 12bb
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/mutualfund.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                Mutual Fund
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/SIP.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                S.I.P.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/GST.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                G.S.T.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/EMI.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                E.M.I.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/PPF.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                P.P.F.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/FD.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                F.D.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/RD.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                R.D.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/NPS.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                N.P.S.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/SSY.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                S.S.Y.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/ITR.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                ITR Eligibility
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/TA.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                T.A.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/TDS.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                T.D.S.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/80D.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                80D
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/80C.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                80C
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Image
                style={styles.upperImage}
                source={require('../Assets/images/80TTA.jpg')}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  paddingTop: 15,
                }}>
                80TTA
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainconatainer: {
    backgroundColor: 'white',
  },
  section: {
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'normal',
    lineHeight: 25,
  },
  tileContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  tile: {
    width: windowWidth / 2 - 40,
    height: windowWidth / 2 - 30,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  upperImage: {
    width: windowWidth / 3,
    height: windowWidth / 3 - 20,
  },
});
export default TaxTools;
