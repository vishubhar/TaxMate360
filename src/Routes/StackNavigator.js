import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './tabs/BottomTabs';
import HomeScreen from '../screens/HomeScreen';
import TaxTools from '../screens/TaxTools';
import ITRFiling from "../screens/ITRFiling";
import MyOrders from '../screens/MyOrders';
import Profile from '../screens/Profile';
import SearchBar from "../components/SearchBar";
import Form16 from '../components/Form16';
import PayConsultingFees from '../components/PayConsultingFees'
import GenerateRentReceipt from '../components/GenrateRentReceipt'
import ForgetPassword from '../components/ForgetPassword';
import NotificationScreen from '../screens/NotificationScreen';
import Menu from '../screens/Menu';
import Mutualfunds from '../screens/Mutualfunds';
import GSTScreen from '../screens/GSTScreen';
import BusinessStartup from '../screens/BusinessStartup';
import Support from '../components/Support';
import Feedback from '../components/Feedback';
import Profiledetails from '../components/Profiledetails';
import ToolsandResources from '../screens/ToolsandResources';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MutualFunds" component={Mutualfunds} />
      <Stack.Screen name="Tax Tools" component={TaxTools} options={{ headerShown: true }} />
      <Stack.Screen name="ITR Filing" component={ITRFiling} options={{ headerShown: true }} />
      <Stack.Screen name="My Orders" component={MyOrders} options={{ headerShown: true }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
      <Stack.Screen name="SearchBar" component={SearchBar} />
      <Stack.Screen name="Upload Form-16" component={Form16} options={{ headerShown: true }} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} options={{ headerShown: true }} />
      <Stack.Screen name="Pay Consulting Fees" component={PayConsultingFees} options={{ headerShown: true }} />
      <Stack.Screen name="Generate Rent Receipt" component={GenerateRentReceipt} options={{ headerShown: true }} />
      <Stack.Screen name="Notification Screen" component={NotificationScreen} options={{ headerShown: true, headerTitle: "NOTIFICATIONS" }} />
      <Stack.Screen name='Menu' component={Menu} />
      <Stack.Screen name='GST' component={GSTScreen} options={{ headerShown: true }} />
      <Stack.Screen name='Business Startup' component={BusinessStartup} options={{ headerShown: true }} />
      <Stack.Screen name='Help and Support' component={Support} options={{ headerShown: true }} />
      <Stack.Screen name='Feedback' component={Feedback} options={{ headerShown: true }} />
      <Stack.Screen name='Profile Settings' component={Profiledetails} options={{ headerShown: true }} />
      <Stack.Screen name='Tools and Resources' component={ToolsandResources} options={{ headerShown: true }} />

    </Stack.Navigator>
  );
};

export default StackNavigator;

