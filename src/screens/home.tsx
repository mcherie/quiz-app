import React from "react"
import { TouchableOpacity, Text, StyleSheet, Button, View } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"


export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
      }}>Welcome to Quiz App!</Text>
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
    </View>
  )
}