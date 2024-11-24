import { View, TextInput, Text } from "react-native";
import { style } from '@/assets/css/style';
import { SetStateAction } from "react";

interface InputProps {
    defaultValue?: number;
    onChange: (value: SetStateAction<number>) => void;
    unit?: string;
}

export function Input({ defaultValue, onChange, unit }: InputProps) {
    return (
        <View style={style.inputParent}>
            <TextInput 
                style={style.input} 
                maxLength={3} 
                placeholder="Type your temperature"
                defaultValue={defaultValue?.toString()} 
                onChangeText={(text) => {
                    if (text === "") {
                        onChange(0);
                    } else {
                        const numericValue = parseFloat(text);
                        onChange(isNaN(numericValue) ? 0 : numericValue);
                    }
                }}
            />
            <Text style={style.unit}>°C</Text>
        </View>
    )
}