import React from 'react';
import "./TodosLoading.css";
function TodosLoading(){
      return (
        
        <div className="loader">
        <div data-glitch="Loading..." className="glitch">Loading...</div>
     </div>
      );
    }
  
    export { TodosLoading };