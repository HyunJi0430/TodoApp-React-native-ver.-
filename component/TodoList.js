import React from 'react'
import { View, StyleSheet } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <View style={st.TodoListContainer}>
        {
            todos.map((todo, i)=> (
                <Todo 
                    todo={todo} 
                    key={i}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo} />
            ))
        }
    </View>
  )
}

const st = StyleSheet.create({
    TodoListContainer:{
        marginTop: 20,
        marginLeft: 20,
        marginRight:20,
        borderColor: '#A0A0A0',
        borderWidth: 1,
        shadowOpacity:0.3,
        shadowRadius:3,
        shadowColor: '#000',
        shadowOffset: {width: 4, height: 4},
        padding:20,
        backgroundColor: '#fff'
    }
})
export default TodoList