import React from "react";
import './CreateTodoButton.css'

function CreateTodoButtom({setOpenModal}){

    const onClickButton = (msg) => {
        setOpenModal( prevState => !prevState);
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={ () => onClickButton('s') }
        >
            +
        </button>
    );
}

export default CreateTodoButtom;