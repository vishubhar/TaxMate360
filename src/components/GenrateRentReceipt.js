import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const BasicDetailsSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required').matches(/^[A-Za-z]{3}/, 'Enter Valid Name'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone Number is required'),
    panNo: Yup.string().matches(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/, 'Invalid PAN number').required('PAN Number is required'),
});

const RentInformationSchema = Yup.object().shape({
    monthlyRent: Yup.number().required('Monthly Rent is required'),
    landlordName: Yup.string().required('Landlord Name is required').matches(/^[A-Za-z]{3,}$/, 'Enter Valid Name'),
    landlordPanNo: Yup.string().matches(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/, 'Invalid PAN number').required('Landlord PAN Number is required'),
    startDate: Yup.string()
        .required('Start Date is required')
        .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Invalid date format (DD/MM/YYYY)'),
    endDate: Yup.string()
        .required('End Date is required')
        .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Invalid date format (DD/MM/YYYY)')
        .test('is-after-start', 'End date must be after start date', function (endDate) {
            const { startDate } = this.parent;
            return startDate && endDate && new Date(endDate) >= new Date(startDate);
        }),
});

const RentedHouseAddressSchema = Yup.object().shape({
    houseNo: Yup.string(),
    streetName: Yup.string(),
    area: Yup.string(),
    pincode: Yup.string().matches(/^[0-9]{6}$/, 'Must be a valid pincode').required('Required'),
    town: Yup.string(),
    district: Yup.string().required('Required').matches(/^[A-Za-z]{1,}$/, 'Enter District'),
    state: Yup.string().required('Required').matches(/^[A-Za-z]{1,}$/, 'Enter State Correctly'),
});

const BasicDetails = ({ onSubmit }) => {

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
                panNo: '',
            }}
            validationSchema={BasicDetailsSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, errors, touched, handleSubmit, isValid }) => (
                <View style={styles.container}>
                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                                source={require('../Assets/icons/text-outline.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Your Full Name</Text>
                            <TextInput
                                style={styles.input}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                placeholder="Enter Name"
                            />
                            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                                source={require('../Assets/icons/mail-outline.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Email Address</Text>
                            <TextInput
                                style={styles.input}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                placeholder="Email Address"
                                keyboardType="email-address"
                            />
                            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                                source={require('../Assets/icons/call-outline.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Mobile Number</Text>
                            <TextInput
                                style={styles.input}
                                value={values.phoneNumber}
                                onChangeText={handleChange('phoneNumber')}
                                placeholder="Mobile Number"
                                keyboardType="numeric"
                            />
                            {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                                source={require('../Assets/icons/PersonID.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}> Your PAN Number</Text>
                            <TextInput
                                style={styles.input}
                                value={values.panNo}
                                onChangeText={handleChange('panNo')}
                                placeholder="Your PAN Number"
                            />
                            {touched.panNo && errors.panNo && <Text style={styles.error}>{errors.panNo}</Text>}
                        </View>
                    </View>


                    <View style={styles.btncont}>
                        <TouchableOpacity onPress={handleSubmit} >
                            <View style={[styles.buttonContainer, { backgroundColor: isValid ? '#1E74FD' : '#8EB9FE' }]}>
                                <Text style={styles.buttonText}>Next <Image
                                    style={{ height: 25, width: 25, tintColor: 'white' }}
                                    source={require('../Assets/icons/arrow-forward-circle-outline.png')}
                                /></Text>

                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </Formik>
    )
}

const RentInformation = ({ onSubmit, onPrevious }) => {

    return (
        <Formik
            initialValues={{
                monthlyRent: '',
                landlordName: '',
                landlordPanNo: '',
                startDate: '',
                endDate: '',
            }}
            validationSchema={RentInformationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, errors, touched, handleSubmit, isValid }) => (
                <View style={styles.container}>
                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                                source={require('../Assets/icons/rupee.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Your Monthly Rent</Text>
                            <TextInput
                                style={styles.input}
                                value={values.monthlyRent}
                                onChangeText={handleChange('monthlyRent')}
                                keyboardType="numeric"
                                placeholder="1000"
                                placeholderTextColor="lightgrey"
                            />
                            {touched.monthlyRent && errors.monthlyRent && <Text style={styles.error}>{errors.monthlyRent}</Text>}
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image style={{ height: 20, width: 20, tintColor: 'white' }} source={require('../Assets/icons/text-outline.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Landlord Name</Text>
                            <TextInput
                                style={styles.input}
                                value={values.landlordName}
                                onChangeText={handleChange('landlordName')}
                                placeholder="Landlord Name"
                                placeholderTextColor="lightgrey"
                            />
                            {touched.landlordName && errors.landlordName && <Text style={styles.error}>{errors.landlordName}</Text>}
                        </View>
                    </View>

                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image style={{ height: 20, width: 20, tintColor: 'white' }} source={require('../Assets/icons/PersonID.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Landlord PAN Number</Text>
                            <TextInput
                                style={styles.input}
                                value={values.landlordPanNo}
                                onChangeText={handleChange('landlordPanNo')}
                                placeholder="ABCDE1234F"
                                placeholderTextColor="lightgrey"
                            />
                            {touched.landlordPanNo && errors.landlordPanNo && <Text style={styles.error}>{errors.landlordPanNo}</Text>}
                        </View>
                    </View>

                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image style={{ height: 20, width: 20, tintColor: 'white' }} source={require('../Assets/icons/calendar.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Start Date</Text>
                            <TextInput
                                style={styles.input}
                                value={values.startDate}
                                onChangeText={handleChange('startDate')}
                                placeholder="DD-MM-YYYY"
                                placeholderTextColor="lightgrey"
                            />
                            {touched.startDate && errors.startDate && <Text style={styles.error}>{errors.startDate}</Text>}
                        </View>
                    </View>

                    <View style={styles.listContainer}>
                        <View style={styles.iconcontainer}>
                            <Image style={{ height: 20, width: 20, tintColor: 'white' }} source={require('../Assets/icons/calendar.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>End Date</Text>
                            <TextInput
                                style={styles.input}
                                value={values.endDate}
                                onChangeText={handleChange('endDate')}
                                placeholder="DD-MM-YYYY"
                                placeholderTextColor="lightgrey"
                            />
                            {touched.endDate && errors.endDate && <Text style={styles.error}>{errors.endDate}</Text>}
                        </View>
                    </View>

                    <View style={styles.btncont2}>
                        <TouchableOpacity onPress={onPrevious}>
                            <View style={[styles.buttonContainer, { backgroundColor: '#1E74FD' }]}>
                                <Text style={styles.buttonText}> <Image
                                    style={{ height: 25, width: 25, tintColor: 'white', }}
                                    source={require('../Assets/icons/arrow-back-circle-outline.png')}
                                />  Previous</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleSubmit}>
                            <View style={[styles.buttonContainer, { backgroundColor: isValid ? '#1E74FD' : '#8EB9FE' }]}>
                                <Text style={styles.buttonText}>Next <Image
                                    style={{ height: 25, width: 25, tintColor: 'white' }}
                                    source={require('../Assets/icons/arrow-forward-circle-outline.png')}
                                /></Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const RentedHouseAddress = ({ onSubmit, onPrevious }) => {
    return (
        <ScrollView>
            <Formik
                initialValues={{
                    houseNo: '',
                    streetName: '',
                    area: '',
                    pincode: '',
                    town: '',
                    district: '',
                    state: '',
                }}
                validationSchema={RentedHouseAddressSchema}
                onSubmit={onSubmit}
            >
                {({ values, handleChange, errors, touched, handleSubmit, isValid }) => (
                    <View style={styles.container}>
                        <View style={styles.listContainer}>
                            <View style={styles.iconcontainer}>
                                <Image
                                    style={{ height: 20, width: 20, tintColor: 'white', }}
                                    source={require('../Assets/icons/location.png')} />
                            </View>
                            <View style={styles.textContainer} >
                                <View>
                                    <View style={styles.address}>
                                        <View>
                                            {/* House No */}
                                            <Text style={styles.label}>House/Building/Apartment No</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.houseNo}
                                                onChangeText={handleChange('houseNo')}
                                                placeholder="House No"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {errors.houseNo && touched.houseNo && (
                                                <Text style={styles.error}>{errors.houseNo}</Text>
                                            )}

                                            {/* Street Name */}
                                            <Text style={styles.label}>Street/Road/Lane</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.streetName}
                                                onChangeText={handleChange('streetName')}
                                                placeholder="Street Name"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {errors.streetName && touched.streetName && (
                                                <Text style={styles.error}>{errors.streetName}</Text>
                                            )}

                                            {/* Area */}
                                            <Text style={styles.label}>Area/Locality/Sector</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.area}
                                                onChangeText={handleChange('area')}
                                                placeholder="Area"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {errors.area && touched.area && (
                                                <Text style={styles.error}>{errors.area}</Text>
                                            )}

                                            {/* Pincode */}
                                            <Text style={styles.label}>Pincode</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.pincode}
                                                onChangeText={handleChange('pincode')}
                                                placeholder="Pincode"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {errors.pincode && touched.pincode && (
                                                <Text style={styles.error}>{errors.pincode}</Text>
                                            )}

                                            {/* Town */}
                                            <Text style={styles.label}>Village/Town/City</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.town}
                                                onChangeText={handleChange('town')}
                                                placeholder="Town"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {errors.town && touched.town && (
                                                <Text style={styles.error}>{errors.town}</Text>
                                            )}

                                            {/* District */}
                                            <Text style={styles.label}>District</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.district}
                                                onChangeText={handleChange('district')}
                                                placeholder="Enter District"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {touched.district && errors.district && <Text style={styles.error}>{errors.district}</Text>}

                                            {/* State */}
                                            <Text style={styles.label}>State</Text>
                                            <TextInput
                                                style={styles.input}
                                                value={values.state}
                                                onChangeText={handleChange('state')}
                                                placeholder="Enter State"
                                                placeholderTextColor="lightgrey"
                                            />
                                            {touched.state && errors.state && <Text style={styles.error}>{errors.state}</Text>}
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>


                        <View style={styles.btncont2}>
                            <TouchableOpacity onPress={onPrevious}>
                                <View style={[styles.buttonContainer, { backgroundColor: '#1E74FD' }]}>
                                    <Text style={styles.buttonText}> <Image
                                        style={{ height: 25, width: 25, tintColor: 'white', }}
                                        source={require('../Assets/icons/arrow-back-circle-outline.png')}
                                    />  Previous</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
                                <View style={[styles.buttonContainer, { backgroundColor: isValid ? '#1E74FD' : '#8EB9FE' }]}>
                                    <Text style={styles.buttonText}>Genrate Reciept <Image
                                        style={{ height: 25, width: 25, tintColor: 'white' }}
                                        source={require('../Assets/icons/done-circle-outline.png')}
                                    /></Text>

                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}

const GenerateRentReceipt = () => {
    const [tabActive, setTabActive] = useState(1);

    const handleNext = () => {
        if (tabActive < 3) {
            setTabActive(tabActive + 1);
        }
    };

    const handlePrevious = () => {
        if (tabActive > 1) {
            setTabActive(tabActive - 1);
        }
    };
    return (
        <View style={styles.mainCont}>
            <View style={styles.tabnav}>
                <TouchableOpacity style={[styles.tab, tabActive === 1 && styles.tabActive]}>
                    <Text style={[styles.tabText, tabActive === 1 && styles.activeTabText]}>Basic Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, tabActive === 2 && styles.tabActive]}>
                    <Text style={[styles.tabText, tabActive === 2 && styles.activeTabText]}>Rent Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, tabActive === 3 && styles.tabActive]}>
                    <Text style={[styles.tabText, tabActive === 3 && styles.activeTabText]}>Rented House Address</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {tabActive === 1 && <BasicDetails onSubmit={handleNext} />}
                {tabActive === 2 && <RentInformation onSubmit={handleNext} onPrevious={handlePrevious} />}
                {tabActive === 3 && <RentedHouseAddress onSubmit={handleNext} onPrevious={handlePrevious} />}
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    mainCont: {
        marginBottom: 50,
    },
    container: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 1,
        borderRadius: 7,
    },
    error: {
        textAlign: 'left',
        color: 'red',
        padding: 5,
        paddingLeft: 0,
        marginBottom: 10,
        marginTop: -20,
        borderRadius: 5,
    },
    roadmapContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: 'white',
        height: 50
    },
    tabnav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        backgroundColor: 'white'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContent: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabText: {
        color: '#555',
        fontSize: 14,
        textAlign: "center"
    },
    activeTabText: {
        fontWeight: 'bold',
        color: '#007BFF',
    },
    tabActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#007BFF',
    },
    roadLine: {
        flex: 0.3,
        height: 1,
        backgroundColor: 'grey',
    },
    roadLineActive: {
        backgroundColor: '#007BFF',
    },
    listContainer: {
        flex: 1,
        flexDirection: "row",
    },
    iconcontainer: {
        height: 40,
        width: 40,
        backgroundColor: "#1E74FD",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10

    },
    textContainer: {
        flex: 2,
        marginLeft: 10
    },
    label: {
        fontSize: 14,
        fontWeight: "400",
        color: 'black'
    },
    input: {
        height: 40,
        borderBottomWidth: .5,
        borderBottomColor: 'gray',
        marginBottom: 20
    },
    btncont: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"

    },
    btncont2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10
    },
    buttonContainer: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingTop: 0,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        lineHeight: 35,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-between"
    },
});

export default GenerateRentReceipt;
