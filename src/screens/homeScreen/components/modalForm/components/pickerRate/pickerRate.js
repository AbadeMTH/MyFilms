import { Picker } from "@react-native-picker/picker"
import React from "react"
import { View } from "react-native"
import { stylesPickerRate as styles } from "./style"

export function PickerRate({ value, onChange }) {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                dropdownIconColor={"#EC8305"}
                style={styles.picker}
                selectedValue={value}
                onValueChange={onChange}
            >
                <Picker.Item label="0 estrelas" value={0} />
                <Picker.Item label="0.5 estrela" value={0.5} />
                <Picker.Item label="1 estrela" value={1} />
                <Picker.Item label="1.5 estrelas" value={1.5} />
                <Picker.Item label="2 estrelas" value={2} />
                <Picker.Item label="2.5 estrelas" value={2.5} />
                <Picker.Item label="3 estrelas" value={3} />
                <Picker.Item label="3.5 estrelas" value={3.5} />
                <Picker.Item label="4 estrelas" value={4} />
                <Picker.Item label="4.5 estrelas" value={4.5} />
                <Picker.Item label="5 estrelas" value={5} />
            </Picker>
        </View>
    )
}
