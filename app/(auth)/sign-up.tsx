import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { Colors } from '@/constants/colors';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Image
                source={images.signUpCar}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center',
    },

    image: {
        height: '40%',
    },
});
