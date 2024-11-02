import React from "react"
import { Pressable, Text, View } from "react-native"
import useStorage from "../../../../../../hooks/useStorage"
import { stylesPersonalizedAlert as styles } from "./style"

export function PersonalizedAlert({
    closeModal,
    closePersonalizedAlert,
    film,
    textAlert,
}) {
    const { removeFilm, updateFilm } = useStorage() // Importando o hook de armazenamento

    async function removeData() {
        // Função que recebe um filme e remove do storage
        await removeFilm("@films", film)
        closeModal() // Fecha o modal após a remoção do filme
        closePersonalizedAlert() // Fecha o alerta personalizado após a remoção do filme
    }

    async function updateData() {
        // Função que recebe todos os dados de um filme especificado e atualiza no storage
        updateFilm("@films", {
            id: film.id,
            film: film.film,
            notes: film.notes,
            rating: film.rating,
            time: film.time,
        })
        closeModal()
        closePersonalizedAlert() // Fecha o alerta personalizado após a atualização do filme
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.textAlert}>{textAlert}</Text>
                <View style={styles.buttonsContainer}>
                    <Pressable
                        style={styles.button}
                        onPress={closePersonalizedAlert}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </Pressable>
                    {textAlert == "Deseja excluir este Filme?" ? (
                        <Pressable style={styles.button} onPress={removeData}>
                            <Text style={styles.buttonText}>Excluir</Text>
                        </Pressable>
                    ) : (
                        <Pressable style={styles.button} onPress={updateData}>
                            <Text style={styles.buttonText}>Atualizar</Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    )
}
