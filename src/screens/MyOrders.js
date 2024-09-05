import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const OrderItem = ({title, orderId, date, status, onPress, buttonLabel}) => (
  <View style={styles.tile}>
    <View style={styles.firstRow}>
      <View style={styles.iconcontainer}>
        <Image
          style={{height: 28, width: 28}}
          source={require('../Assets/icons/paper.png')}
        />
      </View>
      <View style={styles.SuccessRow}>
        <View>
          <Text style={styles.headingText}>{title}</Text>
          <Text style={styles.bottomtext2}>Order Id - {orderId}</Text>
          <Text style={styles.bottomtext}>on {date}</Text>
        </View>
        <Image
          style={{height: 40, width: 40}}
          source={
            status === 'success'
              ? require('../Assets/icons/tick.png')
              : require('../Assets/icons/cross.png')
          }
        />
      </View>
    </View>
    <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
      <Text style={styles.button}>{buttonLabel}</Text>
    </TouchableOpacity>
  </View>
);

const RadioButton = ({label, selected, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.radioButtonContainer}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#1E74FD',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5,
        }}>
        {selected && (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#1E74FD',
            }}
          />
        )}
      </View>
      <Text style={[styles.labelText, selected && styles.labelTextSelected]}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

const MyOrders = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(ordersData);

  const navigation = useNavigation();

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleFilterPress = () => {
    setShowFilterModal(true);
  };
  useEffect(() => {
    setFilteredOrders(ordersData);
  }, []);

  const handleApplyFilter = () => {
    setShowFilterModal(false);
    const filteredData = ordersData.filter(order => {
      const titleMatch = !selectedTitle || order.title === selectedTitle;
      const statusMatch = !selectedStatus || order.status === selectedStatus;
      return titleMatch && statusMatch;
    });
    setFilteredOrders(filteredData.length > 0 ? filteredData : ordersData);
  };

  const handleClearFilters = () => {
    setSelectedTitle('');
    setSelectedStatus('');
  };

  const handleModalClose = () => {
    setShowFilterModal(false);
  };

  const ordersData = [
    {
      title: 'Form-16',
      orderId: '************',
      date: 'Fri, 6 March',
      status: 'success',
      buttonLabel: 'Download',
    },
    {
      title: 'Consultancy Fees',
      orderId: '************',
      date: 'Wed, 4 March',
      status: 'failure',
      buttonLabel: 'Get Details',
    },
    {
      title: 'Consultancy Fees',
      orderId: '************',
      date: 'Wed, 4 March',
      status: 'success',
      buttonLabel: 'Get Details',
    },
    {
      title: 'Form-16',
      orderId: '************',
      date: 'Fri, 6 March',
      status: 'failure',
      buttonLabel: 'Download',
    },
  ];
  return (
    <ScrollView style={styles.Maincontainer}>
      <View style={styles.section}>
        <View style={styles.searchbarContainer}>
          <View style={styles.container} onPress={handleSearch}>
            <Image
              style={{height: 20, width: 20, margin: 10}}
              source={require('../Assets/icons/searchleft.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              onChangeText={text => setSearchText(text)}
              value={searchText}
            />
          </View>
          <TouchableOpacity
            style={styles.container2}
            onPress={handleFilterPress}>
            <Image
              style={{height: 25, width: 25, marginRight: 10}}
              source={require('../Assets/icons/setting.png')}
            />
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              FILTER
            </Text>
          </TouchableOpacity>
        </View>

        {filteredOrders &&
          filteredOrders.map((order, index) => (
            <OrderItem
              key={index}
              title={order.title}
              orderId={order.orderId}
              date={order.date}
              status={order.status}
              onPress={() => {}}
              buttonLabel={order.buttonLabel}
            />
          ))}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showFilterModal}
          onRequestClose={handleModalClose}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.buttonRow}>
                <Text style={styles.modalTitle}>Filter Orders</Text>
                <TouchableOpacity onPress={() => setShowFilterModal(false)}>
                  <Image
                    style={{height: 25, width: 25, marginRight: 10}}
                    source={require('../Assets/icons/close-outline.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.radioGroup}>
                <View style={{borderBottomWidth: 0.5, marginBottom: 5}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      marginBottom: 15,
                      fontWeight: '700',
                    }}>
                    Title
                  </Text>
                  <RadioButton
                    label="Form-16"
                    selected={selectedTitle === 'Form-16'}
                    onPress={() => setSelectedTitle('Form-16')}
                  />
                  <RadioButton
                    label="Consultancy Fees"
                    selected={selectedTitle === 'Consultancy Fees'}
                    onPress={() => setSelectedTitle('Consultancy Fees')}
                  />
                </View>

                <View style={{borderBottomWidth: 0.5, marginBottom: 5}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      marginBottom: 15,
                      fontWeight: '700',
                    }}>
                    Status
                  </Text>
                  <RadioButton
                    label="Success"
                    selected={selectedStatus === 'success'}
                    onPress={() => setSelectedStatus('success')}
                  />
                  <RadioButton
                    label="Failure"
                    selected={selectedStatus === 'failure'}
                    onPress={() => setSelectedStatus('failure')}
                  />
                </View>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.clearFilterButton}
                  onPress={handleClearFilters}>
                  <Text style={{color: '#185AF6', fontWeight: '700'}}>
                    Clear Filters
                  </Text>
                </TouchableOpacity>
                <Pressable
                  style={styles.applyFilterButton}
                  onPress={handleApplyFilter}>
                  <Text style={{color: 'white'}}>Apply</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    paddingLeft: 10,
    paddingRight: 12,
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  searchbarContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  input: {
    flex: 1,
    height: 37,
  },
  MainText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    letterSpacing: 0.2,
    paddingLeft: 10,
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  SuccessRow: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  tile: {
    margin: 10,
    marginBottom: 0,
    borderRadius: 25,
    display: 'flex',
    padding: 20,
    paddingBottom: 10,
    paddingTop: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#f0f0f0',
    elevation: 2,
  },
  headingText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    letterSpacing: 0.1,
    lineHeight: 22,
  },
  bottomtext2: {
    fontSize: 13,
    lineHeight: 18,
    margin: 2,
    color: 'black',
  },
  bottomtext: {
    fontSize: 11,
    lineHeight: 12,
    marginLeft: 2,
    color: 'black',
  },
  button: {
    textAlign: 'center',
    padding: 5,
    width: 130,
    height: 30,
    backgroundColor: '#185AF6',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  iconcontainer: {
    height: 40,
    width: 40,
    backgroundColor: '#2E3092',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  radioButtonSelected: {
    borderWidth: 2,
    borderColor: '#185AF6',
    backgroundColor: '#185AF6',
    borderColor: '#185AF6',
    padding: 2,
  },
  applyFilterButton: {
    backgroundColor: '#185AF6',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,

    borderRadius: 5,
    alignItems: 'center',
  },
  labelText: {
    color: 'grey',
  },
  labelTextSelected: {
    color: 'black',
    fontWeight: '700',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  clearFilterButton: {
    padding: 10,
    alignItems: 'center',
  },
});

export default MyOrders;
