import { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';

export default function DetailScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>DetailScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});