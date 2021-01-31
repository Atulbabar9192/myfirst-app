import Task from './Task'
const Tasks = ({ tasks }) => {
    //obj distucting props.tasks instead we write directly obj name tasks 
    return (
        <>
            {tasks.map((tasks) => (< Task task={tasks} />
            ))}
        </>
    )
}
export default Tasks;
