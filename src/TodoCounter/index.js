import React from "react";
import '../index'
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";

 function TodoCounter(){

    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);

    return(
        <h2 className='TodoCounter'> Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export default TodoCounter;