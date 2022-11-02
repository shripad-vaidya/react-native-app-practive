import { View, Text, StyleSheet, TextInput, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import SocialShare from '../Components/SocialShare'
const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', paddingTop: 100 }}>Welcome Back!</Text>
            <Text style={{ fontSize: 22, paddingTop: 10, paddingRight: 30, color: 'gray' }}>Fill your details or continue with social media</Text>
            <View style={styles.SectionStyle}>

                <Image source={require('./../assets/Message.png')} style={styles.ImageStyle} />

                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Enter Your Email Here"
                    underlineColorAndroid="transparent"
                />

            </View>
            <View><TextInput placeholder='Enter your Password' autoCorrect={false} secureTextEntry={true} textContentType='password'></TextInput></View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.btnLogin}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>
            </View>
            <SocialShare/>
            <View style={styles.userText}>
                <Text style={{fontSize:20}}>New User?</Text>
                <TouchableOpacity >
                    <Text style={{fontWeight:'bold' , fontSize:20}}> Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 30,
        //   alignItems: 'center',
        //   justifyContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        paddingRight: 30
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    btnLogin: {
        paddingLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: '#4CA6A8',
        
    },
    loginText: {
        color:"#ffff",
    },
    userText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    }
});