import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useRef, useState } from 'react';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants/onBoarding';

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    router.replace('/(auth)/sign-up');
                }}
            >
                <Text style={styles.skipLink}>Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View style={styles.swiperDot}></View>}
                activeDot={<View style={styles.activeSwiperDot}></View>}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    );
                })}
            </Swiper>
        </SafeAreaView>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    skipLink: {
        textAlign: 'right',
        paddingHorizontal: 20,
        fontSize: 14,
        fontFamily: 'Jakarta-Bold',
    },
    swiperDot: {
        width: 30,
        height: 5,
        backgroundColor: 'blue',
        marginHorizontal: 2,
        borderRadius: 10,
    },

    activeSwiperDot: {
        width: 30,
        height: 5,
        backgroundColor: 'tomato',
        marginHorizontal: 2,
        borderRadius: 10,
    },
});
