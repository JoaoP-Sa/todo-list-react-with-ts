// Interfaces
import { ITask } from "../interfaces/Task";

// CSS
import styles from '../style/TaskList.module.css';

interface Props {
    taskList: ITask[];
    handleEdit: (task: ITask) => void;
    handleDelete: (id: number) => void;
}

function TaskList({ taskList,handleEdit , handleDelete }: Props) {
    return (
        <>
        { taskList.length 
        ? (
            taskList.map(task => (
                <div key={ task.id } className={ styles.task }>
                    <div className={ styles.details }>
                        <h4>{ task.title }</h4>
                        <p>Dificuldade: { task.difficulty }</p>
                    </div>
                    <div className={ styles.actions }>
                        <i className="bi bi-pencil" onClick={ () => handleEdit(task) }></i>
                        <i className="bi bi-trash" onClick={ () => handleDelete(task.id) }></i>
                    </div>
                </div>
            ))
        ) 
        : (
            <p>Não há tarefas cadastradas</p>
        ) }
        </>// essa sintaxe é chamada de fragment, e utilizamos ela sempre que temos um
        // if else envolvendo a renderização de algum componente
    );
}

export default TaskList;