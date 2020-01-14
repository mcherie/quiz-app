import React from "react"
import { TouchableOpacity, Text, StyleSheet, Button, View } from "react-native"


export const HomeScreen = ({navigation, screenProps}) => {
  return (
    <View>
      <Text style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            }}> Welcome to Quiz App! </Text>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Question")}
      >
        <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          textDecorationLine: "underline"
    }}> Go to Quiz </Text>
    </TouchableOpacity>

    <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          marginTop: 400,
    }}> {`${screenProps}`} </Text>

    </View>
  )
}