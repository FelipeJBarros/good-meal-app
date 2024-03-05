import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated";
import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { theme } from "@/theme";

type SelectedIngredientsProps = {
    quantity: number,
    onClear: () => void,
    onSearch: () => void
}

export function SelectedIngredients(
    { quantity, onClear, onSearch}: SelectedIngredientsProps
) {
    return (
        <Animated.View
            entering={SlideInDown.duration(500)}
            exiting={BounceOutDown}
            style={ style.container }
        >
            <View style={ style.header }>
                <Text style={ style.label }>
                    {quantity} ingredient{quantity > 1 && 's'} selected
                </Text>
                <MaterialIcons
                    name="close"
                    size={24}
                    color={theme.colors.gray_400}
                    onPress={onClear}
                />
            </View>
            <Pressable style={ style.searchButton } onPress={onSearch}>
                <Text style={ style.searchLabel }>
                    Find
                </Text>
            </Pressable>
        </Animated.View>
    );
};