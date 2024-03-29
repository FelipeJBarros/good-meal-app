import { FlatList, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { Recipe } from "@/components/recipe";

import { style } from "./style";
import { theme } from "@/theme";

import { services } from "@/services";
import { IngredientList } from "@/components/ingredientList";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "@/components/loading";
import { Error } from "@/components/error";
import { RecipesNotFound } from "@/components/recipesNotFound";

export default function Recipes() {
    const params = useLocalSearchParams<{ ingredientsIds: string }>();
    const ingredientsIds = params.ingredientsIds.split(",");

    const { 
        data: ingredients,
        isPending: isIngredientsPending,
        error: ingredientsError
    } = useQuery({
        queryKey: [ "recipes-ingredients" ],
        queryFn: () => services.ingredients.findByIds(ingredientsIds)
    });

    const {
        data: recipes,
        isPending: isRecipesPending,
        error: recipesError,
        isFetching
    } = useQuery({
        queryKey: [ "recipes" ],
        queryFn: () => services.recipes.findByIngredientsIds(ingredientsIds),
        initialData: [],
    });

    const isPeding = isIngredientsPending || isRecipesPending;
    const hasError = ingredientsError || recipesError

    if ( isPeding ) {
        return <Loading message="Consulting grandma's old recipe books..."/>
    }

    if ( hasError ) {
        return <Error />
    }

    if ( !isFetching && recipes.length <= 0) {
        return (
            <RecipesNotFound
                message="We are still working on recipes with these ingredients."
                ingredients={ingredients!}
            />
        )
    }

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
                    Ingredients selected
                </Text>

                { ingredients &&
                    <IngredientList ingredients={ingredients} />
                }

            </View>

            <FlatList
                data={recipes}
                keyExtractor={ item => item.id }
                renderItem={
                    ({ item }) => 
                        <Recipe
                            recipe={item}
                            onPress={
                                () => router.navigate("/recipeDetails/" + item.id
                            )}
                        />
                }
                style={ style.recipes }
                contentContainerStyle={ style.recipesContent }
                showsVerticalScrollIndicator={ false }
            />
        </View>
    );
}