import React,{ useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native' 

const Input = ({inputValue, inputChange}) => {
  return (
    <View style={st.inputContainer}>
        <TextInput style={st.input} 
                   placeholder='Write Down...' 
                   placeholderTextColor='#c2c2c2'
                   selectionColor='#333333'
                   value={inputValue}
                   onChangeText={inputChange}/>
    </View>
  )
}


const st = StyleSheet.create({
    inputContainer:{
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor:'#000000',
        shadowOffset: { width: 2, height: 2 },
        borderWidth: 1,
        borderColor: '#A0A0A0',
    },
    input: {
        height: 60,
        backgroundColor:'#fff',
        paddingLeft: 20,
        paddingRight:20,
        fontSize: 20,
        fontWeight: '300'
    }
})

export default Input