import React, { useState } from "react"
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import { stylesModalForm as styles } from "./style"
import { PickerRate } from "./components/pickerRate/pickerRate"
import useStorage from "../../../../hooks/useStorage"

export function ModalForm({
    // Recebe os dados do filme caso seja para edição
    closeModal,
    _id,
    _film,
    _notes,
    _rating,
    _time,
    isEditable = false,
}) {
    const [id, setId] = useState(_id || 0) //O setId é inutilizado visto que o id é gerado automaticamente
    const [film, setFilm] = useState(_film || "")
    const [notes, setNotes] = useState(_notes || "")
    const [rating, setRating] = useState(_rating || 0)
    const [time, setTime] = useState(_time || "")

    const { saveFilm, updateFilm, removeFilm } = useStorage() // Importando o hook de armazenamento

    async function saveData({ film, notes, rating, time }) {
        // Função que recebe os dados do filme e salva-os no storage
        saveFilm("@films", {
            id: Math.random().toString(36).substr(2, 9), // Gerando um id aleatório
            film: film,
            notes: notes,
            rating: rating,
            time: time,
        })
        closeModal()
    }

    async function updateData({ id, film, notes, rating, time }) {
        // Função que recebe todos os dados de um filme especificado e atualiza no storage
        updateFilm("@films", {
            id: id,
            film: film,
            notes: notes,
            rating: rating,
            time: time,
        })
        closeModal()
    }

    async function removeData(film) {
        // Função que recebe um filme e remove do storage
        Alert.alert("Deletar Filme", "Deseja excluir este Filme?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Sim",
                style: "default",
                onPress: async () => {
                    await removeFilm("@films", film)
                    closeModal()
                },
            },
        ])
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {isEditable ? "Atualizar Filme" : "Adicionar Filme"}
                </Text>

                <ScrollView
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={styles.scrollView}
                >
                    <View>
                        <Text style={styles.labelInput}>Nome do Filme</Text>

                        <TextInput
                            style={styles.input}
                            autoCorrect={true}
                            autoCapitalize="sentences"
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

                        <PickerRate
                            value={rating}
                            onChange={(value) => setRating(value)}
                        />
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
                </ScrollView>

                <View style={styles.buttonsContainer}>
                    {isEditable ? (
                        <>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    updateData({
                                        id,
                                        film,
                                        notes,
                                        rating,
                                        time,
                                    })
                                }
                            >
                                <Text style={styles.buttonText}>Atualizar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    removeData({
                                        id,
                                        film,
                                        notes,
                                        rating,
                                        time,
                                    })
                                }
                            >
                                <Text style={styles.buttonText}>Deletar</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                saveData({ film, notes, rating, time })
                            }
                        >
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={styles.button}
                        onPress={closeModal}
                    >
                        <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
