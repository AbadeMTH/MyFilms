import React from "react"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { stylesModalAddFilm as styles } from "./style"
import { PickerRate } from "./components/pickerRate/pickerRate"

export function ModalAddFilm({ closeModal }) {
    async function saveData() {
        //TODO: ADD DATA TO STATE
        Alert.alert("Filme adicionado com sucesso!")
        closeModal()
    }
    //TODO: ADD HATE INPUT
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Adicionar Filme</Text>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.labelInput}>Nome do Filme</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite aqui..."
                            placeholderTextColor={"#DBD3D3"}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Anotação</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite aqui uma anotação, caso tenha..."
                            placeholderTextColor={"#DBD3D3"}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Avaliação</Text>
                        <PickerRate />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Tempo de Pause</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite aqui o momento de pause..."
                            placeholderTextColor={"#DBD3D3"}
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
