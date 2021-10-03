import {useState} from 'react';

function InputTask(props) {
    const [newTask, setTask] = useState({task: "", checked: false});

    function handleChange(event) {
        setTask({task: event.target.value, checked: false});
    }
   

    return  (<div className="todolist__add-task">
    <input onChange={(event) => {handleChange(event);}} className="add-task__input" type="text" name="" id=""  value={newTask.task} placeholder="Add a new task" />
    <button onClick={(event) => {props.onClick(event, newTask); setTask({task: "", checked: false})}} className="add-task__task__submit-task" type="submit">+</button>
    </div>);
}

export default InputTask;

