import React from "react"
import { stylesTitle as styles } from "./style"
import { Text, View } from "react-native"

export function Title({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.filmsText}>{title}</Text>
        </View>
    )
}
