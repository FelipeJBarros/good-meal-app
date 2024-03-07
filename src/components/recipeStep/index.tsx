import { Text, View } from "react-native";
import { style } from "./style";

type StepProps = {
    step: number,
    description: string
}

export function RecipeStep({ step, description }: StepProps) {
    return (
        <View style={ style.container }>
            <Text style={ style.step }>{ step }</Text>
            <Text style={ style.description }>{ description }</Text>
        </View>
    )
}