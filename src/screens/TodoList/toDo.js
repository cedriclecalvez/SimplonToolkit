import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import {toggleTodo} from '../../store/toDoSlice'


export function ToDo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
//   const [checked, setChecked] = React.useState(false);

//   function handleSumbit(id){
   
//     dispatch(deleteTodo({id}));

//   }

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {todos.map((todo, index) => (<>
      
      <Checkbox
      status = {todo.completed ? 'checked' : 'unchecked'}
      //{checked ? 'checked' : 'unchecked'}

        onPress={()=>{
            dispatch(
                 toggleTodo(todo.id)
              //  setChecked(!checked)

            );
        }
       
    }
      />
      


        <Text style={styles.todoText} key={todo.id}>{`${index + 1}. ${
          todo.text
        }`}</Text>
       </>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  todoText: {
    margin: 4,
  },
});