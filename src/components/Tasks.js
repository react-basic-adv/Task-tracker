import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div className="p-3">
            {tasks.map(task => (
                <Task onDelete= {onDelete} onToggle={onToggle} key={task.id} task={task} />
            ))}
        </div>
    )

}

export default Tasks;