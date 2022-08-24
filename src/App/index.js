import React from "react";
import { TodoProvider } from "../TodoContext";
import AppUI from "./AppUI";



function App() {

  

  /*
  console.log('Render antes de use effect');
  React.useEffect( () => {
    console.log('use effect');
  },[totalTodos]);
  console.log('Render luego de use effect');
  */

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;