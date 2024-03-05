import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: theme.fonts.size.heading.lg,
        fontFamily: theme.fonts.family.bold,
        lineHeight: 28
    },
    subtitle: {
        fontFamily: theme.fonts.family.regular
    },
    message: {
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.regular,
        marginTop: 12,
        marginBottom: 36,
        color: theme.colors.gray_400
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 42
    },
    photoButton: {
        backgroundColor: theme.colors.green_600,
        
        padding: 12,
        width: 48,
        height: 48,
        borderRadius: theme.borderRadius.md,

        justifyContent: "center",
        alignItems: "center"
    },
    listContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 12,
        
        paddingTop: 4,
        paddingBottom: 200
    }
});