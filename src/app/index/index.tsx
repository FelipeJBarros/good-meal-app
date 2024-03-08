import { useState } from "react";
import { View, Text, TouchableHighlight, ScrollView, Alert } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';

import { Ingredient } from "@/components/ingredient";
import { SelectedIngredients } from "@/components/selectedIngredients";
import { Loading } from "@/components/loading";
import { Error } from "@/components/error";

import { style } from "./style";
import { theme } from "@/theme";

import { useQuery } from "@tanstack/react-query";
import { services } from "@/services"

export default function Home() {

    const {
        data: ingredients,
        isPending,
        error
    } = useQuery({
        queryKey: [ "ingredients" ],
        queryFn: () => services.ingredients.findAll() 
    });

    const [selectdIngredients, setSelectedIngredients] = useState<string[]>([]);

    function handleToggleIngredientSelection(value: string) {
        if (selectdIngredients.includes(value)) {
            return setSelectedIngredients(
                selectdIngredients.filter(ingredient => ingredient !== value)
            );
        };

        setSelectedIngredients([
            ...selectdIngredients, value
        ]);
    }

    function handleRecipesSearch() {
        router.navigate("/recipes/" + selectdIngredients);
    }

    function handleSelectionClear() {
        Alert.alert(
            "Clean ingredients?",
            "Do you really want to clean everything?",
            [
                {text: "No", style: "cancel"},
                {text: "Yes", onPress: () => setSelectedIngredients([])}
            ]
        );
    }

    if ( isPending ) {
        return <Loading  message="Let's see what is in the fridge..."/>
    }

    if ( error ) {
        return <Error />
    }

    return (
        <View style={ style.container }>
            <View style={ style.row }>
                <Text style={ style.title }>
                    Find {"\n"}
                    <Text style={ style.subtitle }>
                        ingredients
                    </Text>
                </Text>
                <TouchableHighlight style={ style.photoButton }>
                    <MaterialIcons
                        name="add-a-photo"
                        size={20}
                        color={ theme.colors.white }
                    />
                </TouchableHighlight>
            </View>
            <Text style={ style.message }>
                Discover recipes based on the products {"\n"}
                you chose or through images.
            </Text>

            <ScrollView
                contentContainerStyle={ style.listContainer }
                showsVerticalScrollIndicator={ false }
            >
                {ingredients?.map(
                    (ingredient) =>
                        <Ingredient
                            key={ingredient.id}
                            name={ingredient.name}
                            image={`${services.storage.imagePath}/${ingredient.image}`}
                            isSelected={selectdIngredients.includes(ingredient.id)}
                            onPress={() => handleToggleIngredientSelection(ingredient.id)}
                        />
                )}
            </ScrollView>
            
            { selectdIngredients.length > 0 && (
                <SelectedIngredients
                    quantity={selectdIngredients.length}
                    onClear={handleSelectionClear}
                    onSearch={handleRecipesSearch}
                />
            )}
        </View>
    );
}