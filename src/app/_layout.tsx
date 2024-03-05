import { Slot } from "expo-router";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function AppLayout() {

    const fontIsLouded = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontIsLouded) {
        return;
    }

    return fontIsLouded ? <Slot /> : null;
};