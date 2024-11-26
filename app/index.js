import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { getPokemonsApi, getPokemonDeatilsByUrlApi } from "./api/pokemon";
import { useRouter } from 'expo-router';
import PokemonList from "./components/PokemonList";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: Overlay: Support for defaultProps will be removed']);

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    useEffect(() => {
        (async () => {
            await loadPokemons();
        })()
    }, []);

    const ventana = () => {
        router.replace('/(auth)/home');
    }

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextUrl);
            setNextUrl(response.next);
            console.log(nextUrl);

            const pokemonsArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonDeatilsByUrlApi(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other['official-artwork'].front_default
                });
            }
            setPokemons(pokemonsArray);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView >
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
        </SafeAreaView>
    );
}