import { Image, Text, Pressable, PressableProps } from "react-native";
import { style } from "./style";

export type IngredientProps = {
    name: string,
    image: string,
    isSelected?: boolean
}

export function Ingredient(
    {name, image, isSelected = false, ...rest}: IngredientProps & PressableProps
) {
    return (
        <Pressable style={[ style.container, isSelected && style.selected ]} {...rest}>
            <Image
                style={ style.emoji }
                source={{ uri: image }}
            />
            <Text style={ style.title }>
                { name }
            </Text>
        </Pressable>
    )
}