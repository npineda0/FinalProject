import { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';

export default function HomeScreen ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});