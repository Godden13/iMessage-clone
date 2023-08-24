import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("login");
      })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
      <Text>This is the homescreen finally</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogOut} style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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


export default HomeScreen

