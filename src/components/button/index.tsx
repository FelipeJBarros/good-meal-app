import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { style } from "./style";

type ButtonProps = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={ style.button }
            {...rest}
        >
            <Text style={ style.text }>
                {title}
            </Text>
        </TouchableOpacity>
    );
};