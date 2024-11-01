import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Text, View } from "react-native"
import { stylesRating as styles } from "./style"

export function Rating({ ratingValue }) {
    function renderStars(ratingValue) {
        const stars = [] //Array que guarda as estrelas renderizadas
        const fullStars = Math.floor(ratingValue) //Contagem de estrelas cheias
        const hasHalfStar = ratingValue % 1 !== 0 //Verifica se há uma estrela pela metade
        const totalStars = 5 //Número total e máximo de estrelas
        const totalRenderStars = fullStars + (hasHalfStar ? 1 : 0) //1 = True / 0 = False

        //Renderiza estrelas cheias
        if (ratingValue > 0) {
            for (let i = 0; i < fullStars; i++) {
                stars.push(
                    <FontAwesome name="star" size={24} color="yellow" key={i} />
                )
            }

            //Renderiza uma meia estrela se necessário (se o ratingValue é um decimal)
            if (hasHalfStar) {
                stars.push(
                    <FontAwesome
                        name="star-half-full"
                        size={24}
                        color="yellow"
                        key={hasHalfStar}
                    />
                )
            }

            //Renderiza estrelas vazias (se necessário) para chegar no número máximo de estrelas
            for (let i = totalRenderStars; i < totalStars; i++) {
                stars.push(
                    <FontAwesome
                        name="star-o"
                        size={24}
                        color="yellow"
                        key={i}
                    />
                )
            }
        } else { //Renderiza estrelas vazias caso o ratingValue seja zero
            for (let i = 0; i < totalStars; i++) {
                stars.push(
                    <FontAwesome
                        name="star-o"
                        size={24}
                        color="yellow"
                        key={i}
                    />
                )
            }
        }
        return stars
    }

    return (
        <View style={styles.container}>
            <Text style={styles.ratingText}>Avaliação:</Text>
            {renderStars(ratingValue)}
        </View>
    )
}
