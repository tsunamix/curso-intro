import React from "react";
import './TodoItem.css';

import TodoIcon from "../TodoIcon";

function TodoItem(props){

    /*
    const onComplete = () => {
        alert('Ya completaste el TODO:'+ props.text);
        props.onComplete(props.text)
    }
    

    const onDelete = () => {
        alert('Borraste el TODO: '+ props.text);
        
    }
    */

    /*
    return(
        <li className="TodoItem" key={props.text} >
            <TodoIcon
                type='check'
                completed={props.completed}
                onComplete = {props.onDelete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <TodoIcon
                type='delete'
                completed={props.completed}
                onDelete = {props.onDelete}
            />
        </li>
    );
    */

    return(
        <li className="TodoItem" key={props.text} >
            <TodoIcon
                type='check'
                completed={props.completed}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <TodoIcon
                type='delete'
                onDelete = {props.onDelete}
            />
          </li>
    );
}

export default TodoItem;