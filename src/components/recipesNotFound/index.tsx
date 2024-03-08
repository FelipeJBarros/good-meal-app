import { Image, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { IngredientList } from "../ingredientList";

import { style } from "./style";
import { theme } from "@/theme";

import { router } from "expo-router";

type NotFoundProps = {
    message?: string,
    ingredients: IngredientResponse[]
}

export function RecipesNotFound({ message, ingredients }: NotFoundProps) {
    return (
        <View style={ style.container }>
            <MaterialIcons
                    name="arrow-back"
                    size={32}
                    color={ theme.colors.black }
                    onPress={() => {
                        router.navigate("/");
                    }}
                />
            <View style={ style.content }>
                <Image
                    source={ require("@/../assets/images/cooking.png") }
                    style={ style.image }
                />
                <IngredientList ingredients={ingredients} />
                <Text style={ style.heading }>
                    Hey, could you come back later?
                </Text>
                <Text style={ style.message }>
                    { message }
                </Text>
                
            </View>
        </View>
    );
}