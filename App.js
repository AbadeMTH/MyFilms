import React from "react"
import { SafeAreaView, StatusBar } from "react-native"
import { HomeScreen } from "./src/screens/homeScreen"

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <HomeScreen />
        </SafeAreaView>
    )
}
