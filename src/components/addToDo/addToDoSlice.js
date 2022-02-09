import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoItems: []
}

const addToDoSlice = createSlice({
    name:'addToDo',
    initialState,
    reducers: {
        addToDoItem: (state, {payload}) => {
            state.todoItems = [...state.todoItems, payload]
        },
        manipulateToDos: (state, {payload}) => {
            let value = [];
            for (var i in state.todoItems) {
                if (state.todoItems[i].id == payload) {
                    value.push({...state.todoItems[i],done:!state.todoItems[i].done}) 
                } else {
                    value.push(state.todoItems[i])
                }
              }
            // console.log("data",payload)
            // let updateToDos = state.todoItems.map((item) => {
            //     return item.id === payload ? {...item, done: !item.done} : item
            // })
            console.log("testing", {value})
            state.todoItems = value
        }
    }
})

export const { addToDoItem, manipulateToDos } = addToDoSlice.actions

//Selector
export const toDoList = (state) => state.todo.todoItems

export default addToDoSlice.reducer