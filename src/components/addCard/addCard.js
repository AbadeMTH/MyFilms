import React from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { stylesAddCard as styles} from "./style";

export function AddCard(){
    return(
        <TouchableOpacity style={styles.button}>
            <FontAwesome6 name="add" size={26} color="#DBD3D3" />
        </TouchableOpacity>
    )
}