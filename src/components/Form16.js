import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Collapsible from 'react-native-collapsible';
import DocumentPicker from 'react-native-document-picker';



const BasicDetailsSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, 'Must be a valid Name'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid phone number').required('Required'),
  panNo: Yup.string().matches(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/, 'Invalid PAN number').required('Landlord PAN Number is required'),
  aadharNo: Yup.string().matches(/^[0-9]{12}$/, 'Must be a valid Aadhar number').required('Required'),
  dob: Yup.string()
    .required('Required')
    .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Invalid date format (DD/MM/YYYY)'),
  fatherName: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, 'Must be a valid Name')
    .min(3, 'Full Name must be at least 3 characters long'),
  houseNo: Yup.string(),
  streetName: Yup.string(),
  area: Yup.string(),
  pincode: Yup.string().matches(/^[0-9]{6}$/, 'Must be a valid pincode').required('Required'),
  town: Yup.string(),
  district: Yup.string().required('Required').matches(/^[A-Za-z]{1,}$/, 'Enter District'),
  state: Yup.string().required('Required').matches(/^[A-Za-z]{1,}$/, 'Enter State Correctly'),
});

const BankDetailsSchema = Yup.object().shape({
  bankName: Yup.string().required('Required').matches(/^[A-Za-z]{3,}$/, 'Must be a Bank Name'),
  ifscCode: Yup.string().matches(/^[A-Za-z]{4,}[A-Za-z0-9]{4,}$/, 'Invalid IFSC code').required('Required'),
  accountNo: Yup.string().matches(/^[0-9]{11,17}$/, 'Must be between 11 to 17 digits').required('Required'),
});

const UploadDocsSchema = Yup.object().shape({
  form16: Yup.string(),
  form16Password: Yup.string(),
  eFilingPassword: Yup.string(),
});

const BasicDetailsForm = ({ initialValues, onSubmit }) => {
  const [isAddressExpanded, setAddressExpanded] = useState(false);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BasicDetailsSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
        <ScrollView style={styles.container}>
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
                keyboardType="default"
                placeholder="Full Name"
                placeholderTextColor="lightgrey"
              />
              {errors.name && touched.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
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
                keyboardType="email-address"
                placeholder="Email Address"
                placeholderTextColor="lightgrey"
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
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
                keyboardType="numeric"
                placeholder="9971055886"
                placeholderTextColor="lightgrey"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/PersonID.png')} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Your Pan Number</Text>
              <TextInput
                style={styles.input}
                value={values.panNo}
                onChangeText={(text) => handleChange('panNo')(text.toUpperCase())}
                placeholder="ABCDE1234F"
                placeholderTextColor="lightgrey"
              />
              {errors.panNo && touched.panNo && (
                <Text style={styles.error}>{errors.panNo}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/PersonID.png')} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Your Aadhar Number</Text>
              <TextInput
                style={styles.input}
                value={values.aadharNo}
                onChangeText={handleChange('aadharNo')}
                placeholder="Aadhar Number"
                placeholderTextColor="lightgrey"
              />
              {errors.aadharNo && touched.aadharNo && (
                <Text style={styles.error}>{errors.aadharNo}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/calendar.png')} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Enter Your Date of Birth</Text>
              <TextInput
                style={styles.input}
                value={values.dob}
                onChangeText={handleChange('dob')}
                placeholder="(DD/MM/YYYY)"
                placeholderTextColor="lightgrey"
              />
              {errors.dob && touched.dob && (
                <Text style={styles.error}>{errors.dob}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/text-outline.png')} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Enter Your Father's Name</Text>
              <TextInput
                style={styles.input}
                value={values.fatherName}
                onChangeText={handleChange('fatherName')}
                placeholder="Father's Name"
                placeholderTextColor="lightgrey"
              />
              {errors.fatherName && touched.fatherName && (
                <Text style={styles.error}>{errors.fatherName}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white', }}
                source={require('../Assets/icons/location.png')} />
            </View>
            <View style={styles.textContainer} >
              <TouchableOpacity onPress={() => setAddressExpanded(!isAddressExpanded)}>
                <View style={styles.address}>
                  <Text style={styles.label}>Your Address</Text>
                  <Image
                    style={isAddressExpanded ? { height: 15, width: 15, tintColor: 'grey', } : { height: 20, width: 20, tintColor: 'grey' }}
                    source={isAddressExpanded ? require('../Assets/icons/up-arrow.png') : require('../Assets/icons/down-arrow.png')} />
                </View>
              </TouchableOpacity>
              <Collapsible collapsed={!isAddressExpanded}>
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
              </Collapsible>
            </View>
          </View>

          <View style={styles.btncont}>
            <TouchableOpacity onPress={handleSubmit}>
              <View style={[styles.buttonContainer, { backgroundColor: isValid ? '#1E74FD' : '#8EB9FE' }]}>
                <Text style={styles.buttonText}>Next <Image
                  style={{ height: 25, width: 25, tintColor: 'white' }}
                  source={require('../Assets/icons/arrow-forward-circle-outline.png')}
                /></Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const BankDetailsForm = ({ initialValues, onSubmit, onPrevious }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={BankDetailsSchema}
    onSubmit={onSubmit}
  >
    {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 20, tintColor: 'white' }}
              source={require('../Assets/icons/bank.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Enter Your Bank Name</Text>
            <TextInput
              style={styles.input}
              value={values.bankName}
              onChangeText={handleChange('bankName')}
              placeholder="Enter Bank Name"
              placeholderTextColor="lightgrey"
            />
            {errors.bankName && touched.bankName && (
              <Text style={styles.error}>{errors.bankName}</Text>
            )}
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 20, tintColor: 'white' }}
              source={require('../Assets/icons/text-outline.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Enter IFSC Code</Text>
            <TextInput
              style={styles.input}
              value={values.ifscCode}
              onChangeText={handleChange('ifscCode')}
              placeholder="IFSC Code"
              placeholderTextColor="lightgrey"
            />
            {errors.ifscCode && touched.ifscCode && (
              <Text style={styles.error}>{errors.ifscCode}</Text>
            )}
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.iconcontainer}>
            <Image
              style={{ height: 20, width: 20, tintColor: 'white' }}
              source={require('../Assets/icons/pin.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Enter Account Number</Text>
            <TextInput
              style={styles.input}
              value={values.accountNo}
              onChangeText={handleChange('accountNo')}
              placeholder="Account Number"
              keyboardType="numeric"
              placeholderTextColor="lightgrey"
            />
            {errors.accountNo && touched.accountNo && (
              <Text style={styles.error}>{errors.accountNo}</Text>
            )}
          </View>
        </View>

        <View style={styles.btncont2}>
          <TouchableOpacity onPress={onPrevious}>
            <View style={[styles.buttonContainer, { backgroundColor: '#1E74FD' }]}>
              <Text style={styles.buttonText}>
                {' '}
                <Image
                  style={{ height: 25, width: 25, tintColor: 'white' }}
                  source={require('../Assets/icons/arrow-back-circle-outline.png')}
                />{' '}
                Previous
              </Text>
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
);

const UploadDocsForm = ({ initialValues, onSubmit, onPrevious }) => {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setForm16(result.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {

      } else {
        console.error('Error picking document', err);
      }
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UploadDocsSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/document.png')} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Upload Form-16 (if any)</Text>
              <TouchableOpacity onPress={pickDocument} value={values.form16} >
                <View style={styles.uploadButton}>
                  <Text>Choose File</Text>
                </View>
              </TouchableOpacity>
              {errors.form16 && touched.form16 && (
                <Text style={styles.error}>{errors.form16}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/lock.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Form-16 Password (if any)</Text>
              <TextInput
                style={styles.input}
                value={values.form16Password}
                onChangeText={handleChange('form16Password')}
                secureTextEntry
                placeholder="Enter Password"
                placeholderTextColor="lightgrey"
              />
              {errors.form16Password && touched.form16Password && (
                <Text style={styles.error}>{errors.form16Password}</Text>
              )}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconcontainer}>
              <Image
                style={{ height: 20, width: 20, tintColor: 'white' }}
                source={require('../Assets/icons/lock.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>E-Filing Online Password (if any)</Text>
              <TextInput
                style={styles.input}
                value={values.eFilingPassword}
                onChangeText={handleChange('eFilingPassword')}
                secureTextEntry
                placeholder="Enter Password"
                placeholderTextColor="lightgrey"
              />
              {errors.form16Password && touched.form16Password && (
                <Text style={styles.error}>{errors.form16Password}</Text>
              )}
            </View>
          </View>

          <View style={styles.btncont2}>
            <TouchableOpacity onPress={onPrevious}>
              <View style={[styles.buttonContainer, { backgroundColor: '#1E74FD' }]}>
                <Text style={styles.buttonText}>
                  {' '}
                  <Image
                    style={{ height: 25, width: 25, tintColor: 'white' }}
                    source={require('../Assets/icons/arrow-back-circle-outline.png')}
                  />{' '}
                  Previous
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit}>
              <View style={[styles.buttonContainer, { backgroundColor: '#1E74FD' }]}>
                <Text style={styles.buttonText}>Submit <Image
                  style={{ height: 25, width: 25, tintColor: 'white' }}
                  source={require('../Assets/icons/done-circle-outline.png')}
                /></Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const Summary = ({ formValues }) => {
  const address = `${formValues.houseNo}, ${formValues.streetName}, ${formValues.area}, ${formValues.pincode}, ${formValues.town}, ${formValues.district}, ${formValues.state}`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summarycontiner}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "black", lineHeight: 22 }}>This Final Summary Report please check all details is correct or not if any changes press back button on top and edit your field.</Text>
        <View style={styles.SummaryHeader}>
          <Text style={{ textAlign: "center", fontSize: 17, color: 'white', lineHeight: 22, fontWeight: "500" }}>
            Profile Info Summary
          </Text>
        </View>
        <View style={styles.detailview}>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Name</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.name}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Father Name</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.fatherName}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Email</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.email}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Phone Number</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.phoneNumber}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Aadhar Number</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.aadharNo}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Pan Number</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.panNo}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Date of Birth</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.dob}</Text>
          </View>
        </View>
        <View style={styles.SummaryHeader}>
          <Text style={{ textAlign: "center", fontSize: 17, color: 'white', lineHeight: 22, fontWeight: "500" }}>
            Address Summary
          </Text>
        </View>
        <View style={styles.detailview}>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Full Address</Text>
            <Text style={styles.SummaryDetailresponse}>{address}</Text>
          </View>
        </View>
        <View style={styles.SummaryHeader}>
          <Text style={{ textAlign: "center", fontSize: 17, color: 'white', lineHeight: 22, fontWeight: "500" }}>
            Bank Details Summary
          </Text>
        </View>
        <View style={styles.detailview}>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Bank Name</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.bankName}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Account Number</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.accountNo}</Text>
          </View>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>IFSC Code</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.ifscCode}</Text>
          </View>
        </View>
        <View style={styles.SummaryHeader}>
          <Text style={{ textAlign: "center", fontSize: 17, color: 'white', lineHeight: 22, fontWeight: "500" }}>
            E-Filing Online Password
          </Text>
        </View>
        <View style={styles.detailview}>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>E-Filing Password</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.eFilingPassword}</Text>
          </View>
        </View>
        <View style={styles.SummaryHeader}>
          <Text style={{ textAlign: "center", fontSize: 17, color: 'white', lineHeight: 22, fontWeight: "500" }}>
            Form-16 Password
          </Text>
        </View>
        <View style={styles.detailview}>
          <View style={styles.summarydetailline}>
            <Text style={styles.SummaryDetail}>Form-16 Password</Text>
            <Text style={styles.SummaryDetailresponse}>{formValues.form16Password}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.confirmbutton}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: "800" }}>
          Confirm & Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

const Form16 = () => {
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    panNo: '',
    aadharNo: '',
    dob: '',
    fatherName: '',
    houseNo: '',
    streetName: '',
    area: '',
    pincode: '',
    town: '',
    district: '',
    state: '',
    bankName: '',
    ifscCode: '',
    accountNo: '',
    form16: '',
    form16Password: '',
    eFilingPassword: '',
  };
  const [tabActive, setTabActive] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);

  const handleNext = (values) => {
    setFormValues({ ...formValues, ...values });
    if (tabActive < 4) {
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
          <Text style={[styles.tabText, tabActive === 2 && styles.activeTabText]}>Bank Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tabActive === 3 && styles.tabActive]}>
          <Text style={[styles.tabText, tabActive === 3 && styles.activeTabText]}>Upload Docs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tabActive === 4 && styles.tabActive]}>
          <Text style={[styles.tabText, tabActive === 4 && styles.activeTabText]}>Summary</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {tabActive === 1 && <BasicDetailsForm initialValues={formValues} onSubmit={handleNext} />}
        {tabActive === 2 && <BankDetailsForm initialValues={formValues} onSubmit={handleNext} onPrevious={handlePrevious} />}
        {tabActive === 3 && <UploadDocsForm initialValues={formValues} onSubmit={handleNext} onPrevious={handlePrevious} />}
        {tabActive === 4 && <Summary formValues={formValues} onPrevious={handlePrevious} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    marginBottom: 50,
  },
  detailview: {
    display: 'flex',
    padding: 20,
    paddingLeft: 0,
    paddingRight: 0
  },
  summarydetailline: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  SummaryDetail: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    fontSize: 16,
    lineHeight: 20,
    borderBottomWidth: .5,
    borderColor: 'grey'
  },
  SummaryDetailresponse: {
    flex: 1.5,
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    fontSize: 16,
    lineHeight: 20,
    borderBottomWidth: .5,
    borderColor: 'grey',
    fontWeight: '700'
  },
  confirmbutton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#0564FD',
    padding: 10,
    borderRadius: 10,
    margin: 10
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
  tabText: {
    color: 'black',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E74FD',
  },
  activeTabText: {
    color: '#1E74FD',
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
  address: {
    height: 50,
    borderBottomWidth: .5,
    borderBottomColor: 'gray',
    marginBottom: 20,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between"
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
    paddingRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 35,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    letterSpacing: .5
  },
  uploadButton: {
    padding: 5,
    marginBottom: 20,
    marginTop: 8,
    backgroundColor: 'white',
    elevation: 2,
    width: 150,
    alignItems: 'center',
    borderRadius: 5
  },
  summarycontiner: {
    margin: 20
  },
  SummaryHeader: {
    backgroundColor: "#51A351",
    padding: 10,
    marginTop: 20
  },
});

export default Form16;


