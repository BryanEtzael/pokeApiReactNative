import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getPokemonDetailsApi } from '../api/pokemon';
import React, { useState, useEffect } from 'react';
import Header from './PokemonDetails/Header';
import Type from './PokemonDetails/Type';
import Estadisticas from './PokemonDetails/Estadistica'
export default function Pokemon() {
    const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailsApi(id);
                setPokemon(response)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [id])

    return (
        <View>
            {pokemon.name !== undefined ?
                <>
                    <ScrollView>
                        <Header
                            name={pokemon.name}
                            order={pokemon.order}
                            type={pokemon.types[0].type.name}
                            image={pokemon.sprites.other['official-artwork'].front_default}
                        />
                        <Type
                            type={pokemon.types}
                        />
                        <Estadisticas stats={pokemon.stats} />
                    </ScrollView>
                </>
                : null}
        </View>
    );
}