import { StyleSheet, Text, Pressable, TouchableHighlight, View, Image } from 'react-native';
import React from 'react';
import { CustomBtnProps } from '@/types/types';
import { Colors } from '@/constants/colors';

const CustomButton = ({ title, onPress, bgVariant, textVariant, leftIcon, rightIcon }: CustomBtnProps) => {
    return (
        <TouchableHighlight
            style={[styles.buttonContainer, bgVariant]}
            onPress={onPress}
        >
            <View style={styles.buttonContainerInner}>
                {leftIcon && (
                    <Image
                        style={styles.imageLeft}
                        source={leftIcon}
                    />
                )}
                <Text style={[styles.buttonTitle, textVariant]}>{title}</Text>
                {rightIcon && (
                    <Image
                        style={styles.imageRight}
                        source={rightIcon}
                    />
                )}
            </View>
        </TouchableHighlight>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        margin: 20,
        backgroundColor: Colors.blue,
        borderRadius: 30,
        justifyContent: 'center',
    },

    buttonContainerInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    buttonTitle: {
        color: 'white',
        fontFamily: 'Jakarta-SemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
    },

    imageLeft: {
        width: 25,
        height: 25,
    },
    imageRight: {
        width: 25,
        height: 25,
    },
});
