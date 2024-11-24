import { Text, TouchableOpacity } from "react-native";
import { style } from '@/assets/css/style';

interface ButtonConvertProps {
    unit: string;
    onPress: () => void;
}

export function ButtonConvert({ unit, onPress }: ButtonConvertProps) {
    return (
        <TouchableOpacity onPress={onPress} style={style.button}>
            <Text style={style.buttonTxt}>Convert to {unit}</Text>
        </TouchableOpacity>
    )
}