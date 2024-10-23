import React from "react"
import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native"
import { stylesCard as styles } from "./style"
import { Rating } from "./components/rating/rating"
import Feather from '@expo/vector-icons/Feather';

export function Card({ film, notes, rating, tempo }) {
    return (
        <TouchableOpacity onPress={() => Alert.alert('Editar card')} style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.filmText}>{film}</Text>
                <Feather
                    name="edit"
                    size={16}
                    color="#fff"
                    style={styles.editIcon}
                />
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
                    <View style={{ marginTop: 10 }}>
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
