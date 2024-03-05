import { View, Text } from "react-native";

import { style } from "./style";

export default function Home() {
    return (
        <View style={ style.container }>
            <Text style={ style.text }>
                Good Meal AI
            </Text>
        </View>
    );
}