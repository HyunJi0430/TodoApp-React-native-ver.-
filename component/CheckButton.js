import React, {useState} from 'react'
import Checkbox from 'expo-checkbox'
import { StyleSheet, Text, View  } from 'react-native'

const CheckButton = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View>
      <Checkbox
          style={st.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#333' : undefined}
        />
    </View>
  )
}

const st = StyleSheet.create({
  checkbox:{
    marginRight: 10
  }
})
export default CheckButton