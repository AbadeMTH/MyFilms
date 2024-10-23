import React, { useState } from "react"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { stylesModalAddFilm as styles } from "./style"
import { PickerRate } from "./components/pickerRate/pickerRate"

export function ModalAddFilm({ closeModal, _film, _notes, _rating, _time }){
    const [film, setFilm] = useState(_film || '')
    const [notes, setNotes] = useState(_notes || '')
    const [rating, setRating] = useState(_rating || 0)
    const [time, setTime] = useState(_time || '')
    async function saveData() {
        //TODO: ADD DATA TO STATE
        Alert.alert("Filme adicionado com sucesso!")
        closeModal()
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Adicionar Filme</Text>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.labelInput}>Nome do Filme</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Filme..."
                            placeholderTextColor={"#DBD3D3"}
                            value={film}
                            onChangeText={(value) => setFilm(value)}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Anotação</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Anotações..."
                            placeholderTextColor={"#DBD3D3"}
                            value={notes}       
                            onChangeText={(value) => setNotes(value)}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Avaliação</Text>
                        <PickerRate value={rating} onChange={(value) => setRating(value)} />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Tempo de Pause</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="00:00"
                            placeholderTextColor={"#DBD3D3"}
                            value={time}
                            onChangeText={(value) => setTime(value)}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={saveData}>
                        <Text
                            style={[
                                styles.buttonText,
                                { backgroundColor: "green" },
                            ]}
                        >
                            Salvar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={closeModal}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                { backgroundColor: "red" },
                            ]}
                        >
                            Fechar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
