import { theme } from "@/theme";
import { fonts } from "@/theme/fonts";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,

        height: 42,
        paddingHorizontal: 16,

        borderWidth: 2,
        borderColor: theme.colors.gray_200,
        borderRadius: theme.borderRadius.full
    },
    title: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.body.sm
    },
    emoji: {
        width: 16,
        height: 16
    },
    selected: {
        borderWidth: 2,
        borderColor: theme.colors.green_600,
        backgroundColor: theme.colors.green_100
    }
});