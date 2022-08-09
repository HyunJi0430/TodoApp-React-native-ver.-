import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Button = ({submitTodo}) => {
  return (
    <View style={st.buttonContainer}>
        <TouchableHighlight 
            style={st.button}
            underlayColor='rgba(175,45,45,0.3)'
            onPress={ submitTodo }
        >
            <Text style={st.submit}>
                SUBMIT
            </Text>
        </TouchableHighlight>
    </View>
  )
}

const st = StyleSheet.create({
    buttonContainer:{
        alignItems:'flex-end'
    },
    button: {
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'rgba(0,0,0,0.8)',
        width: 90,
        height: 40,
        marginRight:20,
        marginTop: 15,
        borderWidth:1,
        borderColor:'#707070',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit:{
        color: '#fff',
        fontSize: 13,
        fontWeight:'500'
    }
})
export default Button