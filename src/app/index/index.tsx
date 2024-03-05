import { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { IngredientList } from "@/components/ingrendientList";

import { style } from "./style";
import { theme } from "@/theme";

export default function Home() {

    const [selectdIngredients, setSelectdIngredients] = useState<string[]>([]);

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

            <IngredientList />
        </View>
    );
}