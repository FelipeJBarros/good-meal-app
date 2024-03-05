import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        
        padding: 24,
        borderRadius: theme.borderRadius.lg,
        
        width: "100%",
        alignSelf: "center",
        gap: 24,

        position: "absolute",
        bottom: 24,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    label: {
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.white
    }
});