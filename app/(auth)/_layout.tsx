import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
    return (
        <>
            <StatusBar style="dark" />
            <Stack>
                <Stack.Screen
                    name="welcome"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sign-in"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    );
};

export default AuthLayout;
