import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './component/Heading'
import Input from './component/Input'
import Button from './component/Button'
import TodoList from './component/TodoList'
import TabBar from './component/TabBar'

let todoIndex = 0;
const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('');

  const inputChange = (text) => {
    console.log('InputValue:' + text);
    setInputValue({text});
  }

  const submitTodo=()=>{
    let str = inputValue.text;
    // if(inputValue.match(/^\s*$/)){
    //   return
    // }
    const todo = {
      title: str,
      todoIndex,
      complete: false
    }
    todoIndex++
    setTodos([...todos, todo]);
    console.log(todo);
    setInputValue('');
  }

  const deleteTodo = ( todoIndex ) => {
    const newTodos = todos.filter((todo)=> todo.todoIndex !== todoIndex);
    setTodos(newTodos);
  }

  const toggleComplete = ( todoIndex ) => {
    todos.forEach((todo)=>{
      if(todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    });

    setTodos(todos);
  }
  return (
    <View style={st.container}>
        <ScrollView style={st.content} keyboardShouldPersistTaps='always'>
          <Heading />
          <Input inputValue={inputValue}
                inputChange = {(text)=>inputChange(text)} />
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          <Button submitTodo={submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={setType} />
    </View>
  )
}



const st = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  content: {
    flex:1,
    paddingTop: 60
  }
})
export default App
