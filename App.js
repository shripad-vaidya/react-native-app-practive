// In App.js in a new project
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import HomePageScreen from './screens/HomePageScreen';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

      <Image source={require('./assets/Main.png')} />
      <View style={styles.container}>
        <Text style={{ fontSize: 50, color: "black", fontWeight: 'bold', alignItems: 'center' }}>Find a Prefect Job Match</Text>
      </View>
      <Text style={{color:'gray', paddingLeft:20,paddingRight:20,fontSize:20}}>Finding your dream job is more eaiser and faster with JobHub</Text>
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.replace('HomePageScreen')}
          style={{ backgroundColor: '#4CA6A8', padding: 20, width: '70%', borderRadius: 10 ,flexDirection:'row'}}>
            
          <Text style={{ color: "#ffff",  paddingLeft: 35, fontSize: 20 }}>Let's Get Started</Text>
          <Icon name="arrow-right" paddingLeft={20} size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="HomePageScreen" component={HomePageScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
