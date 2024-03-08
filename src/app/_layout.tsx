import { Slot } from "expo-router";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

import { 
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AppLayout() {

    const [fontIsLouded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontIsLouded) {
        return;
    }

    return (
        <QueryClientProvider client={ queryClient }>
            { fontIsLouded ? <Slot /> : null }
        </QueryClientProvider>
    );
};