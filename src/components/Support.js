import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Support = () => {
  const [expandedTile, setExpandedTile] = useState(null);

  const toggleExpand = (tileIndex) => {
    setExpandedTile(expandedTile === tileIndex ? null : tileIndex);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.Heading}>FAQs</Text>
      <View style={styles.Tilecontainer}>
        <TouchableOpacity onPress={() => toggleExpand(1)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}> Who needs to file ITR ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 1 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 1 && (
          <Text style={styles.expandedText}>
            According to the regulations of income tax laws, any individual who is earning more than Rs.2,50,000 to Rs.5,00,000 lakh is mandated to pay the tax returns.
          </Text>
        )}
        <TouchableOpacity onPress={() => toggleExpand(2)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}> Can I claim a TDS refund ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 2 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 2 && (
          <Text style={styles.expandedText}>
            Yes. You can claim a TDS refund by the declaration on your IT return form. The income tax department will calculate the refund and credit the amount in your bank account.
          </Text>
        )}
        
        <TouchableOpacity onPress={() => toggleExpand(3)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}> How do I check my ITR Status ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 3 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 3 && (
          <Text style={styles.expandedText}>
            Any individual can check their ITR status on the following Income tax website. You will need your PAN details and ITR declaration number.
          </Text>
        )}


        <TouchableOpacity onPress={() => toggleExpand(4)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}> When to deposite the TDS amount ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 4 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 4 && (
          <Text style={styles.expandedText}>
            TDS can be deposited every 7th of each month for the payment which is made in the previous month. However, the TDS deducted in the month of March can be deposited till 30th April.
          </Text>
        )}


        <TouchableOpacity onPress={() => toggleExpand(5)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}>How do I get my form-16 ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 5 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 5 && (
          <Text style={styles.expandedText}>
            You can download form-16 online from the website of IT department or ask from employer to issue it for the current year.
          </Text>
        )}


        <TouchableOpacity onPress={() => toggleExpand(6)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}> Are my details safe and secure ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 6 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 6 && (
          <Text style={styles.expandedText}>
            Yes. Your details are completely confidential and under the lock and key with myitronline. We respect your privacy and guarantee that Your personal information is safe, secure, and end-to-end encrypted.
          </Text>
        )}

        <TouchableOpacity onPress={() => toggleExpand(7)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}>What is a Demat account ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 7 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 7 && (
          <Text style={styles.expandedText}>
            A demat account (Dematerialised Account) is a type of account that is used to hold the bought shares, stocks, mutual funds, and other securities. A demat account gives us the assurance of security for holding stocks and mutual funds. Having a demat account has been a requirement for stockholders.
          </Text>
        )}

        <TouchableOpacity onPress={() => toggleExpand(8)} activeOpacity={1}>
          <View style={styles.Tile}>
            <Text style={styles.tileHeader}>How to e-verify ITR ?</Text>
            <Image
              style={{ height: 20, width: 20, tintColor: 'grey', transform: [{ rotate: expandedTile === 8 ? '180deg' : '0deg' }] }}
              source={require('../Assets/icons/down-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        {expandedTile === 8 && (
          <Text style={styles.expandedText}>
            You can e-verify your income tax returns using net baking, a digital signature certificate, a bank account, or Aadhar-based OTP. In case of failing to file an income tax return on return, you might be levied penalties as per section 234f.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  Heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
    paddingLeft:10
  },
  tileHeader: {
    color: 'black',
    fontSize: 16
  },
  Tilecontainer: {
    padding: 10,
    elevation: 2,
    shadowColor: 'black',
  },
  Tile: {
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expandedText: {
    color: 'black',
    padding: 10,
    paddingLeft: 0,
    fontWeight: "400",
    lineHeight: 18
  },
});

export default Support;
