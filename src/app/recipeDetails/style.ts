import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 192,
        backgroundColor: theme.colors.gray_300
    },
    body: {
        borderTopStartRadius: theme.borderRadius.lg,
        borderTopEndRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.white,
        marginTop: -24,
        paddingVertical: 24
    },
    header: {
        paddingHorizontal: 24
    },
    name: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.md,
        marginTop: 16
    },
    preparationTime: {
        fontFamily: theme.fonts.family.medium,
        fontSize: theme.fonts.size.body.sm,
        color: theme.colors.gray_400,
        marginBottom: 24
    },
    title: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.xs,
        marginBottom: 8
    },
    preparation: {
        paddingHorizontal: 24
    }
});