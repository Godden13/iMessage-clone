import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";

export default function Page() {
  return (
    <Redirect href="/chat" />
  );
}

const styles = StyleSheet.create({});
