type IngredientResponse = {
    id: string,
    name: string,
    image: string
}

type RecipeResponse = {
    id: string,
    name: string,
    image: string,
    time: number
}

type PreparationResponse = {
    id: string,
    recipe_id: string,
    description: string,
    step: number
}