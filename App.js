import React from "react"
import { SafeAreaView, StatusBar } from "react-native"
import { HomeScreen } from "./src/screens/homeScreen"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar />
                <HomeScreen />
            </SafeAreaView>
        </NavigationContainer>
    )
}
