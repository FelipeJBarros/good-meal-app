import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
        gap: 36
    },
    image: {
        width: 280,
        height: 200,
        objectFit: "contain",
    },
    text: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.md
    },
    button: {
        padding: 12
    }
});