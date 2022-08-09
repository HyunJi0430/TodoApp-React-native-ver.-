import React, {useState} from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TabbarItem = ({title, setType, type}) => {
    const [selected, setSelected] = useState('');
    const [border, setBorder] = useState('');
  return (
    <TouchableHighlight style={[st.item, st.border]}
        underlayColor='#efefef'
        onPress={setType}
    >
        <Text style={[st.itemText, type === title? st.bold:null]}>
            {title}
        </Text>
    </TouchableHighlight>
  )
}

const st = StyleSheet.create({
    item:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#707070'
    },
    itemText:{
        color: '#333',
        fontSize: 17
    },
    selected:{
        backgroundColor: '#ededed'
    },
    bold:{
        fontWeight: 'bold'
    }
})

export default TabbarItem