import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SocialShare = () => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon name="minus" size={30} color={'gray'} />
                <Text style={{ color: '#6A6A6A', paddingBottom: 30, fontSize: 20 }}>Or Continue With</Text>
                <Icon name="minus" size={30} color={'gray'} />
            </View>
            <View style={styles.icon}>
                <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => { console.log("Google.com"); }} >
                    <Image source={require('./../assets/Google.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log("Facebook.com"); }} >
                    <Image source={require('./../assets/Facebook.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SocialShare

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})