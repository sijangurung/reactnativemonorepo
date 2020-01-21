import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function AppHeader() {
    return <View style={styles.container}>
        <Text style={styles.text}>Welcome to React Web + Monorepo</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#a2a2FF',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
    }
})