import { ActivityIndicator, Text, View } from "react-native";

import { style } from "./style";
import { theme } from "@/theme";

type LoadingProps = {
    message?: string
}

export function Loading({ message }: LoadingProps ) {
    return (
        <View style={ style.container }>
            <ActivityIndicator
                size={ 32 }
                color={ theme.colors.green_600 }
            />
            <Text style={ style.message }>
                { message }
            </Text>
        </View>
    )
}