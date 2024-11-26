import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemon';

export default function Type(props) {
    const { type } = props;
    console.log(type);
    return (
        <View style={styles.content}>
            {map(type, (item, index) => (
                <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
                    <Text >
                        {capitalize(item.type.name)}
                    </Text>
                </View>
            ))
            }
        </View >
    )
}
const styles = StyleSheet.create({
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 80,
        marginHorizontal: 10,
    },
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
})