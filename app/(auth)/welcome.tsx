import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants/index';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/custom-button/custom-button';
import { icons } from '@/constants/index';
import { Colors } from '@/constants/colors';

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="inverted" />
            <TouchableOpacity
                onPress={() => {
                    router.replace('/(auth)/sign-up');
                }}
            >
                <Text style={styles.skipLink}>Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                // index={activeIndex}
                loop={false}
                dot={<View style={styles.swiperDot}></View>}
                activeDot={<View style={styles.activeSwiperDot}></View>}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => {
                    return (
                        <View
                            key={item.id}
                            style={styles.onboardingView}
                        >
                            <Image
                                style={styles.image}
                                source={item.image}
                            />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    );
                })}
            </Swiper>

            <CustomButton
                title={isLastSlide ? 'Get Started' : 'Next'}
                onPress={() => (isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1))}
            />
            <View style={styles.bottomPadding} />
        </SafeAreaView>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },

    skipLink: {
        textAlign: 'right',
        paddingHorizontal: 20,
        paddingTop: 20,
        fontSize: 14,
        fontFamily: 'Jakarta-Bold',
    },

    swiperDot: {
        width: 30,
        height: 5,
        backgroundColor: Colors.offwhitedark,
        marginHorizontal: 2,
        borderRadius: 10,
    },

    activeSwiperDot: {
        width: 30,
        height: 5,
        backgroundColor: Colors.blue,
        marginHorizontal: 2,
        borderRadius: 10,
    },

    onboardingView: {
        padding: 20,
        paddingVertical: 50,

        flex: 1,
        justifyContent: 'center',
    },

    image: {
        alignSelf: 'center',
        height: 300,
        width: 300,
    },

    title: {
        fontFamily: 'Jakarta-SemiBold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    },

    description: {
        fontFamily: 'Jakarta-Regular',
        fontSize: 20,
        textAlign: 'center',
    },

    bottomPadding: {
        height: 40,
    },
});
