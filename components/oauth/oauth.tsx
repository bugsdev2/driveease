import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { Colors } from '@/constants/colors';
import { icons } from '@/constants';

const Oauth = () => {
    function handleOauthSignIn() {
        //
    }

    return (
        <View>
            <View style={styles.orContainer}>
                <View style={styles.sideLine} />
                <View>
                    <Text style={{ fontFamily: 'Jakarta-SemiBold' }}>Or</Text>
                </View>
                <View style={styles.sideLine} />
            </View>
            <View>
                <CustomButton
                    title="Log In With Google"
                    bgVariant={{ backgroundColor: Colors.white, borderWidth: 0.2 }}
                    textVariant={{ color: Colors.dark }}
                    leftIcon={icons.google}
                    onPress={handleOauthSignIn}
                />
            </View>
        </View>
    );
};

export default Oauth;

const styles = StyleSheet.create({
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },

    sideLine: {
        height: 0.5,
        width: '40%',
        backgroundColor: Colors.dark,
    },
});
