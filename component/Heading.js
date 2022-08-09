import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => {
  return (
    <View style={st.header}>
        <Text style={st.headerText}>
            TO DO
        </Text>
    </View>
  )
}

const st = StyleSheet.create({
    header: {
        marginTop: 30
    },
    headerText: {
        textAlign: 'center',
        fontSize: 70,
        // color: '#ff0055',
        fontWeight: 'bold'

    }
});

export default Heading