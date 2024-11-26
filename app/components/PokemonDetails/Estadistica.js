import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash'
import React from 'react'

export default function Estadistica(props) {
    const { stats } = props;
    console.log(stats);

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Estadistica</Text>
            {map(stats, (item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text>
                            {capitalize(item.stat.name)}
                        </Text>
                    </View>

                    <Text>
                        BARRA
                    </Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    blockTitle: {
        width: '30%',
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 50,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
})