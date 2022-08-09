import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabbarItem from './TabbarItem'

const TabBar = ({type, setType}) => {
  return (
    <View style={st.container}>
        <TabbarItem title='ALL' type={type} setType={()=>setType('ALL')}/>
        <TabbarItem title='ACTIVE' type={type} setType={()=>setType('ACTIVE')}/>
        <TabbarItem title='COMPLETE' type={type} setType={()=>setType('COMPLETE')}/>
    </View>
  )
}

const st = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#707070'
    }
})
export default TabBar