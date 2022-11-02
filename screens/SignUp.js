import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import * as React from 'react'
import SocialShare from '../Components/SocialShare'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass, setPass] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', paddingTop: 100 ,paddingRight:40}}>Register Account</Text>
            <Text style={{ fontSize: 18, paddingTop: 10, paddingRight: 30, color: 'gray',lineHeight:25 }}>Fill your details or continue with social media</Text>
            
            <View style={{
                flexDirection: 'row',
                marginBottom: 20,
                paddingLeft: 30,
                paddingTop: 20,
                paddingRight: 30
            }}>
                <Icon name="email" size={30} color={'gray'} />
                <TextInput
                    textContentType={'emailAddress'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCompleteType={'email'}
                    clearButtonMode={'while-editing'}
                    keyboardType={'email-address'}
                    returnKeyLabel={'next'}
                    returnKeyType={'next'}
                    placeholder={'Email Address'}
                    style={{
                        flex: 1,
                        paddingLeft: 20,
                        borderBottomColor: '#9BE6DE',
                        borderBottomWidth: 1,
                        height: 30,

                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                marginBottom: 20,
                paddingLeft: 30,
                paddingRight: 30
            }}>
                <Icon name="lock" size={30} color={'gray'} />
                <TextInput
                    textContentType={'password'}
                    onChangeText={(text) => setPass(text)}
                    value={pass}
                    autoCompleteType={'password'}
                    clearButtonMode={'while-editing'}
                    returnKeyLabel={'done'}
                    returnKeyType={'done'}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={{
                        flex: 1,
                        paddingLeft: 20,
                        borderBottomColor: '#9BE6DE',
                        borderBottomWidth: 1,
                        height: 30,
                    }}
                />
                <Icon name="eye-off" size={30} color={'gray'} />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
            <SocialShare style={styles.socialShare} />
            <View style={styles.userText}>
                <Text style={{ fontSize: 18,color:'gray' }}>Already Have Account?</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18}}> Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        color: "#ffff",
        fontSize: 20,
    },
    userText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    }

})