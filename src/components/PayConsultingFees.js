import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PayConsultingFees = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Phone Number is required'),
        panNo: Yup.string().required('PAN No. is required'),
        amount: Yup.number().typeError('Amount must be a number').required('Amount is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            panNo: '',
            amount: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log(values);
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>First Name *</Text>
            <TextInput
                style={styles.input}
                value={formik.values.firstName}
                onChangeText={formik.handleChange('firstName')}
                placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName && (
                <Text style={styles.error}>{formik.errors.firstName}</Text>
            )}

            <Text style={styles.label}>Last Name *</Text>
            <TextInput
                style={styles.input}
                value={formik.values.lastName}
                onChangeText={formik.handleChange('lastName')}
                placeholder="Last Name"
            />
            {formik.touched.lastName && formik.errors.lastName && (
                <Text style={styles.error}>{formik.errors.lastName}</Text>
            )}

            <Text style={styles.label}>Email *</Text>
            <TextInput
                style={styles.input}
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                keyboardType="email-address"
                placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
                <Text style={styles.error}>{formik.errors.email}</Text>
            )}

            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
                style={styles.input}
                value={formik.values.phoneNumber}
                onChangeText={formik.handleChange('phoneNumber')}
                keyboardType="numeric"
                placeholder="Phone Number"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Text style={styles.error}>{formik.errors.phoneNumber}</Text>
            )}

            <Text style={styles.label}>PAN No. *</Text>
            <TextInput
                style={styles.input}
                value={formik.values.panNo}
                onChangeText={formik.handleChange('panNo')}
                placeholder="PAN No."
            />
            {formik.touched.panNo && formik.errors.panNo && (
                <Text style={styles.error}>{formik.errors.panNo}</Text>
            )}

            <Text style={styles.label}>Amount *</Text>
            <TextInput
                style={styles.input}
                value={formik.values.amount}
                onChangeText={formik.handleChange('amount')}
                keyboardType="numeric"
                placeholder="Amount"
            />
            {formik.touched.amount && formik.errors.amount && (
                <Text style={styles.error}>{formik.errors.amount}</Text>
            )}

            <TouchableOpacity onPress={formik.handleSubmit} disabled={!formik.isValid}>
                <View style={[styles.buttonContainer, { backgroundColor: formik.isValid ? '#1E74FD' : '#8EB9FE' }]}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 7,
    },
    label: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
    },
    input: {
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginBottom: 10,
    },
    buttonContainer: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    error: {
        color: 'red',
    },
});

export default PayConsultingFees;
