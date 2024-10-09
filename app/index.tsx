import { Redirect } from 'expo-router';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
    return <Redirect href={'/(auth)/welcome'} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
