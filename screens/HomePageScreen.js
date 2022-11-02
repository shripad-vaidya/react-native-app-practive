import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomePageScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <TouchableOpacity>
          <Image source={require('./../assets/Menu.png')} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'flex-start', paddingLeft: 260 }}>
          <Image source={require('./../assets/profile_ico.png')} />
        </View>

      </View>
      <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:20}}>
        <TextInput
          placeholder={'Search here...'}
          style={styles.searchBar}
        />
        <TouchableOpacity>
          <Image style={{ marginRight:20}} source={require('./../assets/GoBTN.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
        <Text style={{fontSize:25,fontWeight:'bold',paddingLeft:20}}>Popular Job</Text>
        <Text style={{color:'gray',marginRight:20,fontSize:18}}>Show As</Text>
      </View>

    </SafeAreaView>
  )
}
export default HomePageScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    fontSize: 28,
    hight: 85,
    margin: 10,
    width: '70%',
    borderRadius: 5,
    paddingLeft:20,
    backgroundColor: 'white',
  },
});