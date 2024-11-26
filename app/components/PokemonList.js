import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMore = () => {
        loadPokemons();
    }
    return (
        <View>
            <FlatList
                data={pokemons}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => String(pokemon.id)}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                contentContainerStyle={styles.flatListContentContainer}
                onEndReached={isNext && loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    isNext &&
                    <ActivityIndicator
                        color='#AEAEAE'
                        size='large'
                        style={styles.spinner}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        marginTop: 20,
        marginBottom: 60
    },
    flatListContentContainer: {
        paddingHorizontal: 5,
    }
});