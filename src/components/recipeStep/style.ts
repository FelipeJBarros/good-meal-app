import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 22
    },
    step: {
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.bold,
        color: theme.colors.black
    },
    description: {
        flex: 1,
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.gray_400
    }
})