import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'
import CheckButton from './CheckButton';

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <View style={st.todoContainer}>
        <CheckButton name='완료' complete={todo.complete}
                    onPress={()=>toggleComplete(todo.todoIndex)} />
        <Text style={st.todoText}>
            {todo.title}
        </Text>
        {/* <TodoButton name='완료' complete={todo.complete}
                    onPress={()=>toggleComplete(todo.todoIndex)} /> */}
        <TodoButton name='X' 
                    onPress={()=>deleteTodo(todo.todoIndex)} />
    </View>
  )
}

const st = StyleSheet.create({
    todoContainer:{
        marginBottom:1,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 10,
        paddingRight:10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor: '#333656',
        borderStyle:'dashed'
    },
    todoText: {
        fontSize: 17,
        width: 200
    }
})
export default Todo