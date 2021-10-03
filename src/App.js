import {useState} from 'react';
import styles from "./style.css";
import Task from "./Components/Task";
import InputTask from "./Components/InputTask";

import axios from "axios";



function App() {

    const [taskList, setTasks] = useState([]);

    async function postList(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/list_name", 
            
            {task: taskList}

            );
        } catch (err) {console.log(err);}
    }
    

    function deleteTask(id) {
        setTasks(prevTask => {
            return prevTask.filter((noteTask, index) => {
                return index !== id;
              });
        });
    }

    function addTask(event, task) {
        setTasks(prevNotes => {
            return [...prevNotes, task];
          });
    }

    function checkTask(event) {
        const target = event.target;
        const parent = target.parentElement;
       

        const task = parent.parentElement;
        const taskClassList = task.classList;

        const task_text = task.children[1];
        const ttcl = task_text.classList;



        taskClassList.contains("checked") ? taskClassList.remove("checked") : taskClassList.add("checked");
        if(ttcl.contains("checked")) {
            ttcl.remove("checked");
            taskList[task.id].checked = false;
        } else {
            ttcl.add("checked")
            taskList[task.id].checked = true;
        }
    }

   


    return  (<section className="todolist">
     <div className="todolist__notepad">
           <div className="todolist__notepad__heading">
            <h1 className="primary-heading">To Do List</h1>
           </div>

            <div className="todolist__notepad__task-list">
                <ul>

                
                {taskList.map((taskItem, index) => {
                  return (
                  <Task key={index} id={index} task={taskItem.task} checked={taskItem.checked} onCheck={checkTask} onDelete={deleteTask} />
                    ); })}

                </ul>
            </div>


            
            <InputTask onClick={addTask}/>

        </div>
    </section>);
}

export default App;