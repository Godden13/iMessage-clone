import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [contacts, setContacts] = useState<any>({
    name: "",
    appleID: "",
    avatar: "",
  });
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      navigation.navigate("login");
    });
  };

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior='padding'
    // >
    //   <Text>This is the homescreen finally</Text>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity onPress={handleLogOut} style={styles.button}>
    //       <Text style={styles.buttonText}>Log out</Text>
    //     </TouchableOpacity>
    //   </View>
    // </KeyboardAvoidingView>

    <View style={styles.container}>
      {contacts?.map((contact) => {
        return (
          <View style={styles.homePage}>
            <View style={styles.topFxns}>
              <TouchableOpacity
                style={[styles.editBtn, styles.button]}
                onPress={}
              >
                edit
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                new chat
              </TouchableOpacity>
            </View>
            <Text>Messages</Text>
            <View style={styles.searchArea}>
              <TextInput
                placeholder={"Search"}
                value={search}
                onChangeText={(text) => setSearch(text)}
                style={styles.search}
              />
            </View>
            <View style={styles.contactCard}>
              <View style={styles.contactAvatar}></View>
              <Text style={styles.contactName}>
                {contact.name.length > 0 ? contact.name : contact.appleID}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     width: "60%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: "#0783F9",
//     width: "100%",
//     color: "white",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center"
//   },
//   buttonOutline: {
//     backgroundColor: "white",
//     marginTop: 5,
//     borderWidth: 2,
//     borderColor: "#0783F9",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: "#0783F9",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });

const styles = StyleSheet.create({
  homePage: {},
  topFxns: {},
  editBtn: {},
  button: {},
  container: {},
  contactName: {},
  contactCard: {},
  searchArea: {},
  search: {},
  contactAvatar: {},
});

export default HomeScreen;
