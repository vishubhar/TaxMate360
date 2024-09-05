import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
const windowWidth = Dimensions.get('window').width;


const BusinessStartup = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        onSearch(searchText);
    };
    return (

        <ScrollView style={styles.Maincontainer}>
            <View style={styles.section}>
                <View style={styles.container} onPress={handleSearch}>
                    <Image
                        style={{ height: 25, width: 25, margin: 10 }}
                        source={require('../Assets/icons/searchleft.png')} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                </View>
                <Text style={styles.MainText}>Buisness Startup</Text>
                <View style={styles.tile} >
                    <View>
                        <View style={styles.firstRow}>
                            <View style={styles.iconcontainer}>
                                <Image
                                    style={{ height: 20, width: 20, }}
                                    source={require('../Assets/icons/company.png')} />
                            </View>
                            <Text style={styles.headingText}>
                                Company Name Registration
                            </Text>
                        </View>
                        <Text style={styles.bottomtext2}>
                            In india, private limited company or PLC is the most popular legal option of building a corporate entity for conducting businesses.
                        </Text>
                        <TouchableOpacity><Text style={{ ...styles.button, marginLeft: 0 }}>Get Started</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tile} >
                    <View>
                        <View style={styles.firstRow}>
                            <View style={styles.iconcontainer}>
                                <Image
                                    style={{ height: 25, width: 25, }}
                                    source={require('../Assets/icons/registration.png')} />
                            </View>
                            <Text style={styles.headingText}>
                                GST Registration
                            </Text>
                        </View>
                        <Text style={styles.bottomtext2}>
                            GST Registration is a compulsory enrolment for the traders of Goods and Services who meet its registration condition.
                        </Text>
                        <TouchableOpacity><Text style={{ ...styles.button, marginLeft: 0 }}>Get Started</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tile} >
                    <View>
                        <View style={styles.firstRow}>
                            <View style={styles.iconcontainer}>
                                <Image
                                    style={{ height: 25, width: 25, }}
                                    source={require('../Assets/icons/tm.png')} />
                            </View>
                            <Text style={styles.headingText}>
                                Trade Mark Registration
                            </Text>
                        </View>
                        <Text style={styles.bottomtext2}>
                            Trademark Registration is a legal approval to the representation/sign of business/ public brand that you can use to represent your products/ services/ objectives, etc.
                        </Text>
                        <TouchableOpacity><Text style={{ ...styles.button, marginLeft: 0 }}>Get Started</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
    },
    section: {
        padding: 20,
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "black",

    },
    input: {
        flex: 1,
        height: 37,
    },
    MainText: {
        fontSize: 25,
        color: 'black',
        fontWeight: "500",
        letterSpacing: .2,
        paddingLeft: 10
    },
    firstRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10
    },
    tile: {
        width: windowWidth - 40,
        marginTop: 15,
        borderRadius: 25,
        display: 'flex',
        padding: 20,
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: "space-between",
        backgroundColor: "#EAF0FF",
        borderRadius: 10,
        borderWidth: .8,
        borderColor: "black",
    },
    headingText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700',
        letterSpacing: .1,
        lineHeight: 22,
    },
    bottomtext2: {
        fontSize: 13,
        lineHeight: 18,
        margin: 2
    },
    button: {
        textAlign: "center",
        padding: 5,
        margin: 8,
        width: 130,
        height: 30,
        backgroundColor: '#185AF6',
        borderRadius: 15,
        color: 'white',
        fontWeight: "bold"
    },
    iconcontainer: {
        height: 40,
        width: 40,
        backgroundColor: "#2E3092",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
});

export default BusinessStartup;
