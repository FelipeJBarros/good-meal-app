import { supabase } from "./supabase";

export async function findByRecipeId(id: string) {
    const { data } = await supabase
        .from("preparations")
        .select()
        .eq("recipe_id", id)
        .order("step")
        .returns<PreparationResponse[]>();

    return data ?? [];
}