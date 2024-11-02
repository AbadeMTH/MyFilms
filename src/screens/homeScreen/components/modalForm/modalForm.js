import React, { useState } from "react"
import {
    Alert,
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import { stylesModalForm as styles } from "./style"
import { PickerRate } from "./components/pickerRate/pickerRate"
import useStorage from "../../../../hooks/useStorage"
import { PersonalizedAlert } from "./components/personalizedAlert/personalizedAlert"

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
    const [filmData, setFilmData] = useState(null)
    const [textAlert, setTextAlert] = useState("")
    const [personalizedAlert, setPersonalizedAlert] = useState(false)

    const { saveFilm, updateFilm } = useStorage() // Importando o hook de armazenamento

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

    function onAlert({ textAlert }) { // Função que recebe o texto do alerta personalizado e os dados do filme que devem ser atualizados ou deletados
        setFilmData({
            id,
            film,
            notes,
            rating,
            time,
        }),
            setPersonalizedAlert(true)
        setTextAlert(textAlert)
    }

    function closePersonalizedAlert() { // Função que fecha o alerta personalizado e limpa os dados do filme
        setPersonalizedAlert(false)
        setFilmData(null)
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
                                onPress={() => onAlert({
                                    textAlert: "Deseja atualizar este Filme?",
                                })}
                            >
                                <Text style={styles.buttonText}>Atualizar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => onAlert({
                                    textAlert: "Deseja excluir este Filme?",
                                })}
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

                <Modal
                    visible={personalizedAlert}
                    animationType="fade"
                    transparent={true}
                >
                    <PersonalizedAlert
                        film={filmData}
                        closeModal={closeModal}
                        closePersonalizedAlert={closePersonalizedAlert}
                        textAlert={textAlert}
                    />
                </Modal>
            </View>
        </View>
    )
}
