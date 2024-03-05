import { ScrollView } from "react-native";

import { style } from "./style";
import { Ingredient } from "../ingredient";

export function IngredientList() {
    return (
        <ScrollView
            contentContainerStyle={ style.container }
            showsVerticalScrollIndicator={ false }
        >
            <Ingredient
                title="apple"
            />
            <Ingredient
                title="meat"
            />
            <Ingredient
                title="rice"
            />
            <Ingredient
                title="tomato"
            />
        </ScrollView>
    );
}