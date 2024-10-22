import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { stylesCard as styles } from "./style"

export function Card({ film, notes, tempo }) {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.filmText}>{film}</Text>
            </View>

            {notes ? (
                <View style={styles.cardContentNotes}>
                    <Text style={styles.notes}>Anotações: {notes}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.timeText}>Tempo de Pausa</Text>
                        <Text style={styles.time}>{tempo}</Text>
                    </View>
                </View>
            ) : (<View style={styles.cardContent}>
                <View style={styles.footer}>
                    <Text style={styles.timeText}>Tempo de Pausa</Text>
                    <Text style={styles.time}>{tempo}</Text>
                </View>
            </View>)}

            
        </TouchableOpacity>
    )
}
