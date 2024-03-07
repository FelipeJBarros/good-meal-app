import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
    },
    header: {
        paddingTop: 62,
        marginBottom: 12
    },
    title: {
        paddingTop: 12,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.md,
    },
    recipes: {
    },
    recipesContent: {
        gap: 16,
        paddingBottom: 32
    }
});