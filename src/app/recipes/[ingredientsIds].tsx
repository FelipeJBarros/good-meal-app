import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { Recipe } from "@/components/recipe";

import { style } from "./style";
import { theme } from "@/theme";

import { services } from "@/services";
import { IngredientList } from "@/components/ingredientList";

export default function Recipes() {
    const params = useLocalSearchParams<{ ingredientsIds: string }>();
    const ingredientsIds = params.ingredientsIds.split(",");

    const [ ingredients, setIngredients ] = useState<IngredientResponse[]>([]);
    const [ recipes, setRecipes ] = useState<RecipeResponse[]>();

    useEffect(() => {
        services.ingredients.findByIds(ingredientsIds).then(setIngredients);
    }, []);

    useEffect(() => {
        services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes);
    }, []);

    return (
        <View style={ style.container }>
            <View style={ style.header }>
                <MaterialIcons
                    name="arrow-back"
                    size={32}
                    color={ theme.colors.black }
                    onPress={() => {
                        router.navigate("/");
                    }}
                />
                <Text style={ style.title }>
                    Ingredients
                </Text>
                <IngredientList ingredients={ingredients} />
            </View>
            <FlatList
                data={recipes}
                keyExtractor={ item => item.id }
                renderItem={
                    ({ item }) => 
                        <Recipe recipe={item} />
                }
                style={ style.recipes }
                contentContainerStyle={ style.recipesContent }
                showsVerticalScrollIndicator={ false }
            />
        </View>
    );
}