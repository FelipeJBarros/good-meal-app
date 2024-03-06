import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";

type RecipeProps = TouchableOpacityProps & {
    recipe: {
        name: string,
        image: string,
        time: number
    }
}

export function Recipe({ recipe, ...rest }: RecipeProps) {
    return (
        <TouchableOpacity
            style={ style.container }
            activeOpacity={ 0.8 }
            { ...rest }
        >
            <ImageBackground
                source={{ uri: recipe.image }}
                style={ style.image }
            >
                <LinearGradient
                    colors={[ "rgba(0,0,0,0.5)", "#000" ]}
                    style={ style.linear }
                >
                    <Text
                        style={ style.title }
                        numberOfLines={ 1 }
                        lineBreakMode="tail"
                    >
                        { recipe.name }
                    </Text>
                    <Text
                        style={ style.time }
                        numberOfLines={ 1 }
                        lineBreakMode="tail"
                    >
                        { `${recipe.time} minute${recipe.time > 1 ? 's' : ''}` }
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}