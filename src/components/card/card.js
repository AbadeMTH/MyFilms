import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { stylesCard as styles } from "./style"
import { Rating } from "./components/rating/rating"

export function Card({ film, notes, rating, tempo }) {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.filmText}>{film}</Text>
            </View>

            {notes ? (
                <View style={styles.cardContentNotes}>
                    <Text style={styles.notes}>Anotações: {notes}</Text>

                    <Rating ratingValue={rating} />
                    <View style={styles.footer}>
                        <Text style={styles.timeText}>Tempo de Pausa</Text>
                        <Text style={styles.time}>{tempo}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.cardContent}>
                    <View style={{marginTop: 10}}>
                        <Rating ratingValue={rating} />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.timeText}>Tempo de Pausa</Text>
                        <Text style={styles.time}>{tempo}</Text>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )
}
