import React from "react"
import { stylesTitle as styles } from "./style"
import { Text, View } from "react-native"

export function Title({ title }) {
    //TODO: MAKE THE LINE GO ALL WIDTH
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.filmsText}>{title}</Text>
        </View>
    )
}
