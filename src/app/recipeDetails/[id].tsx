import { useEffect, useState } from "react";

import { Image, Text, View, FlatList, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { style } from "./style";

import { services } from "@/services";
import { MaterialIcons } from "@expo/vector-icons";
import { IngredientList } from "@/components/ingredientList";
import { RecipeStep } from "@/components/recipeStep";

export default function RecipeDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const [ recipe , setRecipe ] = useState<RecipeResponse | null>(null);
    const [ ingredients , setIngredients ] = useState<IngredientResponse[]>([]);
    const [ preparations , setPreparations ] = useState<PreparationResponse[]>([]);
    
    useEffect(() => {
        services.recipes.show(id).then(setRecipe);
    }, []);

    useEffect(() => {
        services.ingredients.findByRecipeId(id).then(setIngredients);
    }, []);

    useEffect(() => {
        services.preparations.findByRecipeId(id).then(setPreparations);
    }, []);

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

                <IngredientList ingredients={ ingredients } />

                <View style={ style.preparation }>
                    <Text style={ style.title }>Preparation mode</Text>

                    <View style={{ gap: 16, paddingBottom: 24}}>
                        {preparations.map(preparation => (
                            <RecipeStep
                                step={ preparation.step }
                                description={ preparation.description }
                            />
                        ))}
                    </View>

                    {/* <FlatList
                        data={preparations}
                        renderItem={({ item }) => (
                            <RecipeStep
                                step={ item.step }
                                description={ item.description }
                            />
                        )}
                        contentContainerStyle={{ gap: 16, paddingBottom: 22 }}
                        showsVerticalScrollIndicator={ false }
                    /> */}
                </View>
            </View>
        </ScrollView>
    );
};