import { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, List, Modal, IconButton } from 'react-native-paper';
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function DetailScreen ({ navigation, route }) {
const { firstName, lastName, email } = route.params;
const [visible, setVisible] = useState();
const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
//button pressed-> user signed out and navigates to home page
const signUserOut = () => {
    try {
        signOut(auth)
        .then(() => {
            console.log("signed out");
            navigation.navigate("home");
        })
        .catch((error) => {
            setLoading(false);
            Alert.alert(error.message);
        })
    } catch(error) {
        console.log("try error ", error.message);
    } 
}
    return (
        <View style={styles.container}>
            <Button  style={styles.button} mode="contained" onPress={() => {navigation.navigate("home")}}>
            Go Back Home
            </Button>

            <Text style={styles.header}>Thank you for signing in </Text>
            <IconButton icon="account-circle-outline" style={styles.icon} size={110} ></IconButton>
            <Text style={styles.name}> {JSON.stringify(firstName)} {JSON.stringify(lastName)} {JSON.stringify(email)}</Text>

            <Button style={styles.bottombutton} onPress={showModal} mode="contained">
            Sign Out
            </Button>

            <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={styles.modalcontainer}>
                <Text>Are you sure you want to sign out?</Text>
                <Button onPress={hideModal}>
                Cancel
                </Button>
                <Button
                mode="contained"
                onPress={signUserOut}>
                Confirm
                </Button>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalcontainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        height: 140,
        width: 300,
        marginLeft: 45,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    name: {
        textAlign: 'center',
    }, 
    icon: {
        marginLeft: 135
    },
    button: {
        marginBottom: 10,
        backgroundColor: '#692a96',
    },
    bottombutton: {
        backgroundColor: '#692a96',
        marginTop: 400,
    }
});