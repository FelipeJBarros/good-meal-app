import { Image, Text, View, FlatList, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { IngredientList } from "@/components/ingredientList";
import { RecipeStep } from "@/components/recipeStep";
import { Loading } from "@/components/loading";
import { Error } from "@/components/error";

import { style } from "./style";

import { services } from "@/services";
import { useQuery } from "@tanstack/react-query";


export default function RecipeDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const {
        data: recipe,
        isFetching: isRecipeFetching,
        isError: recipeError
    } = useQuery({
        queryKey: ["recipe-details", id],
        queryFn: () => services.recipes.show(id),
        initialData: {} as RecipeResponse
    });

    const {
        data: ingredients,
        isFetching: isIngredientsFetching,
        isError: ingredientsError
    } = useQuery({
        queryKey: ["recipe-details-ingredients", id],
        queryFn: () => services.ingredients.findByRecipeId(recipe!.id),
        enabled: !!recipe?.id
    });

    const {
        data: preparations,
        isFetching: isPreparationsFetching,
        isError: preparationsError
    } = useQuery({
        queryKey: ["recipe-details-steps", id],
        queryFn: () => services.preparations.findByRecipeId(recipe!.id),
        enabled: !!recipe?.id
    });

    if ( isRecipeFetching || isIngredientsFetching || isPreparationsFetching ) {
        return <Loading message="let's go cooking good looking"/>
    }

    if ( recipeError || ingredientsError || preparationsError) {
        return <Error />
    }


    return (
        <ScrollView
            style={ style.container }
            showsVerticalScrollIndicator={ false }
        >
            <Image
                source={{ uri: recipe?.image }}
                style={ style.image }    
            />
            <View style={ style.body }>
                <View style={ style.header }>
                    <MaterialIcons
                        name="arrow-back"
                        size={ 32 }
                        onPress={ () => router.back() }
                    />
                    <Text style={ style.name }>
                        { recipe?.name }
                    </Text>
                    <Text style={ style.preparationTime }>
                        { `${ recipe?.time } minutes of preparation` }
                    </Text>
                    <Text style={ style.title }>Ingredients</Text>
                </View>

                { ingredients &&
                    <IngredientList ingredients={ ingredients } />
                }

                <View style={ style.preparation }>
                    <Text style={ style.title }>Preparation mode</Text>

                    <View style={{ gap: 16, paddingBottom: 24}}>
                        {preparations?.map(preparation => (
                            <RecipeStep
                                key={preparation.id}
                                step={ preparation.step }
                                description={ preparation.description }
                            />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};