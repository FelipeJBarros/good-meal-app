import { useState } from "react";
import { View, Text, TouchableHighlight, ScrollView, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Ingredient } from "@/components/ingredient";
import { SelectedIngredients } from "@/components/selectedIngredients";

import { style } from "./style";
import { theme } from "@/theme";

export default function Home() {

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
                {Array.from({ length: 100}).map(
                    (_, index) =>
                        <Ingredient
                            key={index}
                            title="Apple"
                            isSelected={selectdIngredients.includes(String(index))}
                            onPress={() => handleToggleIngredientSelection(String(index))}
                        />
                )}
            </ScrollView>
            
            { selectdIngredients.length > 0 && (
                <SelectedIngredients
                    quantity={selectdIngredients.length}
                    onClear={handleSelectionClear}
                    onSearch={() => {}}
                />
            )}
        </View>
    );
}