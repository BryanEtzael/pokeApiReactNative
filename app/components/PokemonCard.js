import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import getColorByPokemonType from "../utils/getColorByPokemon";
import { capitalize } from 'lodash';
import { useRouter } from 'expo-router';
export default function PokemonCard(props) {
    const { pokemon } = props;
    const pokenColor = getColorByPokemonType(pokemon.type);
    const router = useRouter();

    const bgStyles = { backgroundColor: pokenColor, ...styles.bgStyles }
    const goToPokemon = () => {
        console.log(pokemon.name);
        router.push({
            pathname: '/components/Pokemon',
            params: { id: pokemon.id },
        });

        /* */
    }
    return (
        <TouchableNativeFeedback onPress={goToPokemon} >

            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>
                            #{`${pokemon.order}`.padStart(3, 0)}
                        </Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.imagen }} style={styles.image} />
                    </View>
                </View>
            </View>

        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    bgStyles: {
        flex: 1,
        borderRadius: 20,
        padding: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
    },
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
});