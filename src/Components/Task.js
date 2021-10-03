import DeleteIcon from "@material-ui/icons/Delete";

function Task(props) {

    function handleCheck(event) {
        props.onCheck(event);
    }

    function handleDelete() {
        props.onDelete(props.id);
    }

    return  (<section class="todolist">
    
    
    <li className="task" id={props.id}>
                        <div for="" className="task__checkbox">
                            <input onClick={(event) => {handleCheck(event); }} className="checkbox" id="check" type="checkbox" name="" />
                            <label for="check"></label>
                        </div>
                                <p className="task__title">{props.task}</p>
                                <button onClick={handleDelete} className="task__delete" type="submit">  {" "} <DeleteIcon />{" "} </button>
                    </li>
    
    </section>);
}

export default Task;

//onClick(event)