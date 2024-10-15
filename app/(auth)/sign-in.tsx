import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { icons, images } from '@/constants';
import { Colors } from '@/constants/colors';
import CustomInput from '@/components/custom-input/custom-input';
import CustomButton from '@/components/custom-button/custom-button';
import Oauth from '@/components/oauth/oauth';
import { Link } from 'expo-router';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    function handleSignUp() {
        //
    }

    return (
        <View style={styles.container}>
            <Image
                source={images.signUpCar}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome</Text>
            </View>
            <View style={styles.formContainer}>
                <CustomInput
                    label={'Email'}
                    placeholder="Enter email"
                    icon={icons.email}
                    onChangeText={(value) =>
                        setForm({
                            ...form,
                            email: value,
                        })
                    }
                />
                <CustomInput
                    label={'Password'}
                    placeholder="Enter password"
                    icon={icons.lock}
                    secureTextEntry={true}
                    onChangeText={(value) =>
                        setForm({
                            ...form,
                            password: value,
                        })
                    }
                />
            </View>
            <View style={styles.btnContainer}>
                <CustomButton
                    title="Log In"
                    onPress={handleSignUp}
                />
                <Oauth />
                <Text style={styles.alreadyContainer}>
                    Don't have an account?{' '}
                    <Link
                        href={'/(auth)/sign-up'}
                        style={styles.alreadyContainerLogIn}
                    >
                        {' '}
                        Sign Up
                    </Link>
                </Text>
            </View>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center',
    },

    image: {
        height: 300,
        opacity: 0.9,
    },

    titleContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 25,
        marginTop: -80,
    },

    title: {
        textAlign: 'left',
        fontSize: 25,
        fontFamily: 'Jakarta-SemiBold',
    },

    formContainer: {
        alignSelf: 'stretch',
        marginTop: 30,
        paddingHorizontal: 25,
        gap: 10,
    },

    btnContainer: {
        alignSelf: 'stretch',
        marginTop: 10,
    },

    alreadyContainer: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Jakarta-Medium',
    },

    alreadyContainerLogIn: {
        color: Colors.blue,
    },
});
