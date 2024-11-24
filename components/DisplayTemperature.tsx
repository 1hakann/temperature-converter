import { Text } from "react-native";
import { style } from '@/assets/css/style';

interface TemperatureProps {
    temperature: string;
    unit: string;
}

export function DisplayTemperature({ temperature, unit }: TemperatureProps) {
    return (
        <Text style={style.temperatureTxt}>
            {temperature} {unit}
        </Text>
    )
}

