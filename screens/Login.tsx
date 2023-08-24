import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const [appleId, setAppleId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){navigation.navigate("home")}
    })
    return unsubscribe
  }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, appleId, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, appleId, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logged in with " + user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text>Sign in to Apple Messages</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Apple ID"
          value={appleId}
          onChangeText={(text) => setAppleId(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {},
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0783F9",
    width: "100%",
    color: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderWidth: 2,
    borderColor: "#0783F9",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0783F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
