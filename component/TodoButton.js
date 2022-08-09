import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const TodoButton = ({ name, onPress, complete }) => {
  return (
    <View style={st.buttons}>
        <TouchableOpacity
            onPress={onPress}>
            <Text
            style={[st.text, complete ? st.complete:null, name === 'X'? st.deleteButton:null]}>{name}</Text>
        </TouchableOpacity>
    </View>
  )
}


const st = StyleSheet.create({
    buttons:{
        width: 50,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2,
        marginLeft: 'auto'

    },
    text:{
        color: '#333'
    },
    complete:{
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: '#333',
        fontWeight: 'bold'
    }
})
export default TodoButton