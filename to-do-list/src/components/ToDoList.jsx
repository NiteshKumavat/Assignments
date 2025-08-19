import {useState} from 'react';
import "./todo.css"


function ToDoList(){

    const [tasks, setTasks] = useState ([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function handleAddTask(){
        if(newTask.trim() !== ""){
            setNewTask(document.getElementById("inputTask").value)
            setTasks(t =>[...t, newTask]);
            setNewTask("");

        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i !== index));
    }
    function moveTaskUp(index){
        if (index > 0 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index -1]] = [updatedTasks[index - 1],updatedTasks[index]]

            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if (index < tasks.length -1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index +1]] = [updatedTasks[index + 1],updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    return(
        <div className='container'>
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input  id="inputTask" 
                        type="text" 
                        placeholder="Enter a Todo..." 
                        value={newTask} 
                        onChange={handleInputChange} 
                />
                <button className="add-button" onClick={handleAddTask}>Add Task..</button>
            </div>
            <div>
                <h2>Current ToDo's</h2>
                <ol>
                    {tasks.map((task,index) => 
                        <li key={index}> 
                            <span className="text">{task} </span>
                            <button className="move-button"onClick={() => {moveTaskUp(index)}}>/\</button>
                            <button className="move-button"onClick={() => {moveTaskDown(index)}}>\/</button>
                            
                            <button className="delete-button" onClick={() => deleteTask(index)}>remove</button>
                        </li> 
                    )}
                </ol>
            </div>

        </div>
        </div>
    );
}

export default ToDoList;