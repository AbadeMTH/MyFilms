import React, { useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"
import { stylesSearchBar as styles } from "./style"
import Ionicons from "@expo/vector-icons/Ionicons"

export function SearchBar({ onPress }) {
    const [filmSearch, setFilmSearch] = useState("")

    function removeSpaces(val) {
        const film = val.trim() //Remove espaços no inicio e no final
        onPress(film)
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                autoCorrect={true}
                autoCapitalize="sentences"
                placeholder="Pesquisar filme..."
                placeholderTextColor={"#000"}
                value={filmSearch}
                onChangeText={(value) => setFilmSearch(value)}
            />
            <TouchableOpacity
                onPress={() => {
                    removeSpaces(filmSearch)
                }}
            >
                <Ionicons name="search-sharp" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}
