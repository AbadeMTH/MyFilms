import React from "react"
import { Image, Text, View } from "react-native"
import { stylesHeader as styles } from "./style"

export function Header() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../../assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>My Films</Text>
        </View>
    )
}
