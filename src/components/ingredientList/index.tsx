import { ScrollView } from "react-native";
import { Ingredient, IngredientProps } from "../ingredient";

import { style } from "./style";
import { services } from "@/services";

type IngredientListProps = {
    ingredients: IngredientProps[]
}

export function IngredientList({ ingredients }: IngredientListProps) {
    return (
        <ScrollView
            horizontal
            style={ style.container }
            contentContainerStyle={ style.ingredientContent }
            showsHorizontalScrollIndicator={ false }
        >
            {ingredients.map(ingredient => (
                <Ingredient
                    key={ ingredient.name }
                    name={ ingredient.name }
                    image={`${services.storage.imagePath}/${ingredient.image}`}
                    
                />
            ))}
            
        </ScrollView>
    );
};