import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24
    },
    message: {
        fontSize: theme.fonts.size.body.md,
        fontFamily: theme.fonts.family.medium,
        color: theme.colors.gray_400
    }
});