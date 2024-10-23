import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { stylesCard as styles } from "./style"
import { Rating } from "./components/rating/rating"
import Feather from "@expo/vector-icons/Feather"

export function Card({
    film,
    notes,
    rating,
    time,
    onPress,
    onLongPress,
}) {
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.filmText}>{film}</Text>
                <Feather
                    name="edit"
                    size={16}
                    color="#fff"
                    style={styles.editIcon}
                />
            </View>

                <View style={styles.cardContent}>
                    <Text style={styles.notes}>Anotações: {notes}</Text>
                    
                    <Rating ratingValue={rating} />
                    <View style={styles.footer}>
                        <Text style={styles.timeText}>Tempo de Pausa</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>
                </View>

        </TouchableOpacity>
    )
}
