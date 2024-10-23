import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Text, View } from "react-native"
import { stylesRating as styles } from "./style"

export function Rating({ ratingValue }) {
    function renderStars(ratingValue) {
        const stars = [] //Array to store the star components
        const fullStars = Math.floor(ratingValue) //Count of full stars
        const hasHalfStar = ratingValue % 1 !== 0 //Check if there's a half star
        const totalStars = 5 //Total number of stars

        //Render full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FontAwesome name="star" size={24} color="yellow" key={i} />
            )
        }

        //Render half star if needed (if ratingValue is not a whole number)
        if (hasHalfStar) {
            stars.push(
                <FontAwesome name="star-half-full" size={24} color="yellow" key={hasHalfStar} />
            )
        }

        //Render empty stars (if needed) to reach the total number of stars
        const totalRenderStars = (fullStars + (hasHalfStar? 1 : 0)) //1 = True / 0 = False
        for (let i = totalRenderStars; i < totalStars; i++) {
            stars.push(
                <FontAwesome name="star-o" size={24} color="yellow" key={i} />
            )
        }
        return stars
    }

    return (
        <View style={styles.container}>
            <Text style={styles.ratingText}>Avaliação:</Text>
            {ratingValue ? (
                renderStars(ratingValue)
            ) : (
                <Text style={styles.ratingText}>Sem avaliação</Text>
            )}
        </View>
    )
}
