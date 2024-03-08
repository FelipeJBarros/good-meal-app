import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 32
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12
    },
    heading: {
        textAlign: 'center',
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.md
    },
    message: {
        textAlign: 'center',
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.body.md
    },
    image: {
        width: 120,
        height: 120,
        backgroundColor: theme.colors.gray_400,
        padding: 24,
        borderRadius: theme.borderRadius.full,
        objectFit: 'contain'
    }
});