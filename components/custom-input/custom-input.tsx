import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { CustomInputProps } from '@/types/types';
import { Colors } from '@/constants/colors';

const CustomInput = ({ label, inputMode = 'text', placeholder, secureTextEntry = false, icon, onChangeText }: CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    <View>
                        <Text style={styles.label}>{label}</Text>
                    </View>
                    <View style={[styles.inputFieldContainer, isFocused && styles.inputFieldContainerOnFocus, isBlurred && styles.inputFieldContainerOnBlur]}>
                        {icon && (
                            <Image
                                source={icon}
                                style={styles.iconImg}
                            />
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder={placeholder}
                            inputMode={inputMode}
                            onFocus={() => {
                                setIsFocused(true);
                                setIsBlurred(false);
                            }}
                            onBlur={() => {
                                setIsBlurred(true);
                                setIsFocused(false);
                            }}
                            secureTextEntry={secureTextEntry}
                            onChangeText={onChangeText}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontFamily: 'Jakarta-SemiBold',
        paddingBottom: 5,
    },

    inputFieldContainer: {
        flexDirection: 'row',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 15,
        backgroundColor: Colors.offwhitelight,
    },

    inputFieldContainerOnBlur: {
        borderColor: Colors.dark,
    },

    inputFieldContainerOnFocus: {
        borderColor: Colors.blue,
        borderWidth: 0.8,
    },

    iconImg: {
        width: 25,
        height: 25,
    },

    input: {
        fontSize: 18,
        flex: 1,
    },
});
