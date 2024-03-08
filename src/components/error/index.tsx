import { Image, Text, View } from "react-native";
import { style } from "./style";
import { Button } from "../button";
import { router } from "expo-router";

type ErrorProps = {
    message?: string
}

export function Error({ message = "Ops! Something wrong..."}: ErrorProps) {
    return (
        <View style={ style.container }>
            <Image
                source={ require("@/../assets/images/cart.png") }
                style={ style.image }
            />
            <Text style={ style.text }>
                { message }
            </Text>
            <Button
                title="Return home"
                onPress={
                    () => router.navigate("/")
                }
            />
        </View>
    );
};