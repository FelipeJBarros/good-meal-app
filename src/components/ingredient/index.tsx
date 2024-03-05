import { Image, Text, Pressable, PressableProps } from "react-native";
import { style } from "./style";

type IngredientProps = {
    title: string,
    icon?: string,
    isSelected?: boolean
}

export function Ingredient(
    {title, icon, isSelected = false, ...rest}: IngredientProps & PressableProps
) {
    return (
        <Pressable style={ style.container } {...rest}>
            <Image
                style={ style.emoji }
                source={require(`@/assets/tomato.png`)}
            />
            <Text style={ style.title }>
                { title }
            </Text>
        </Pressable>
    )
}