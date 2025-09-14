{* 
  OverView of Designing ToDo App
" Store "
todo -> id, task, isDone

" Actions " (object)
Add a Todo, Mark as Done, Delete a Todo

## example of "Add a Todo" Object ##
{
  type: "ADD_TODO",
  payload: "write code"  //payload stores the content, which we want to add 
}
// OR in payload, we can store it's id too etc
{
  type: "Delete",
  payload: '768'  //id of Task, which we want to Delete
} 
  *}
// ***************************************************************************************************************************************************
// Creating a Reducer!! 
// (state, action) => {//update state}
// Reducer is Object of Functions; Means we pass an "Object" consisting of multiple "Functions"!!

// To get every steps, "https://redux.js.org/tutorials/quick-start#introduction" follow this Page; OR in Chrome (Redux -> Tutorials -> Quick Start)

//Inside src -> features folder -> todo folder -> {todoSlice.js}
//here we will write all Reducers (to write reducer, we need createSlice function)
import { createSlice, nanoid } from '@redux/toolkit';

//intial state of Store, consisting of Array
const intialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false}]    
}

//now creating bundel of (Reducer + Actions)
export const todoSlice = createSlice({
    name: "todo",  //name same as folder inside features(todo)
    intialState,
    // Reducer: 1
    reducer: {    //reducer is "Object" of "Functions" contain of 2 Values ('state' and 'action')
        addTodo: (state, action)=>{
            
            //here created newTodo and directly pushed the updated todo in previous Todo
            const newTodo = {   //action
                id: nanoid(),   //it genrates Unique Id (import from @redux/toolkit)
                task: action.payload,  //gives information of Task
                isDone: false,
            }
            state.todos.push(newTodo); //direct mutation
            //In Redux you get the Power to direct push the Updated Todo Values
            //In normal React, First Destructure and create New Array, storing both copy of previous and new updated Array
            // [...todos, newTodo]
        },
        // Reducer: 2
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        // Reducer: 3
        markAsDone: (state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if (todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;

// ***************************************************************************************************************************************************
//Now Import these in {store.js} file
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '..features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})  
// ***************************************************************************************************************************************************

// Cleaner Version of {todoSlice.js}
import { createSlice, nanoid } from '@redux/toolkit';

const intialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false}]    
}

export const todoSlice = createSlice({
    name: "todo",
    intialState,  //or you can directly write IntialState here (as given in Document)
    reducer: {
        addTodo: (state, action)=>{
            const newTodo = {  
                id: nanoid(), 
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); 
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        markAsDone: (state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if (todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        }
    }
})
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
