import { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, ActivityIndicator, Alert} from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function HomeScreen ({ navigation }) {
//sign in section
const [signInEmailAddress, setSignInEmailAddress] = useState();
const [signInPassword, setSignInPassword] = useState();
//create account section
const [userFirstName, setUserFirstName] = useState()
const [userLastName, setUserLastName] = useState()
const [userEmail, setUserEmail] = useState()
const [userPassword, setUserPassword] = useState()
//activity indicator 
const [loading, setLoading] = useState(false);

//button pressed->loading icon appears, navigate to 2nd screen,
//and set useState variables
const signInUser = async () => {
    setLoading(true);
    try {
        await signInWithEmailAndPassword(auth, signInEmailAddress, signInPassword)
        .then((userCredential) => {
            console.log("user created");
            setSignInEmailAddress("");
            setSignInPassword("");
            setLoading(false);
            navigation.navigate("detail",{
                email: signInEmailAddress
            });
        })
        .catch((error) => {
            setLoading(false);
            Alert.alert(error.message);
            console.log("error ", error.message); 
        })
    } catch(error) {
        console.log("try error ", error.message);
        }
};
//button pressed->loading icon appears, navigate to 2nd screen,
//and set useState variables
const createUser = async () => {
    setLoading(true);
    try {
        await createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            console.log("user created");
            setUserFirstName("");
            setUserLastName("");
            setUserEmail("");
            setUserPassword("");
            setLoading(false);
            navigation.navigate("detail", {
                firstName: userFirstName,
                lastName: userLastName
            });
        })
        .catch((error) => {
            console.log("error ", error.message); 
        })
    } catch(error) {
        console.log("try error ", error.message);
        }
};

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <Text style={styles.header}>Thank You For Visiting!</Text>
            </View>
            <View style={styles.signInContainer}>
                <Text style={styles.headerTwo}>Sign in:</Text>
                <TextInput 
                    style={styles.input}
                    label="User Email"
                    onChangeText={setSignInEmailAddress}
                    value={signInEmailAddress}/>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    label="Password"
                    onChangeText={setSignInPassword}
                    value={signInPassword}/>
                <Button style={styles.button} title="Sign In" onPress={signInUser} mode="contained">Sign In</Button>
            </View>
            <View>
                <ActivityIndicator size="large" color="#000" animating={loading}/>
            </View>
            <View style={styles.signInContainer}>
                <Text style={styles.headerTwo} >Create an Account:</Text>
                <TextInput 
                    style={styles.input}
                    label="First Name"
                    title='firstName'
                    onChangeText={setUserFirstName}
                    value={userFirstName}
                />
                <TextInput 
                    style={styles.input}
                    label="Last Name"
                    onChangeText={setUserLastName}
                    value={userLastName}/>
                <TextInput 
                    style={styles.input}
                    label="User Email"
                    onChangeText={setUserEmail}
                    value={userEmail}/>
                <TextInput 
                    style={styles.input}
                    label="User Password"
                    onChangeText={setUserPassword}
                    value={userPassword}/>
                <Button 
                    style={styles.button}
                    title="Sign In"
                    onPress={createUser}
                    mode="contained">Create Account
                </Button>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerTxt}>N322: Final Project</Text>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signInContainer: {
        padding: 18,
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        backgroundColor: '#692a96',
        height: 50
    },
    header: {
        fontWeight: "bold",
        fontSize: 24,
        color: '#FFF',
    },
    headerTwo: {
        fontWeight: "bold",
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    input: {
        marginTop: 10,

    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#692a96',
    },
    footer: {
        backgroundColor: '#692a96',
        marginTop: 20,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    footerTxt: {
        color: '#fff'
    }
});