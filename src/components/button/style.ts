import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.green_600,

        height: 48,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: theme.borderRadius.sm
    },
    text: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.body.md,
        fontFamily: theme.fonts.family.medium
    }
});