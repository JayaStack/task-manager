import TaskItem from '../TaskItem/TaskItem.jsx';
import styles from './TaskList.module.css';

function TaskList({ tasks, loading, error, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className={styles.center}>
        <div className={styles.spinner} aria-label="Loading tasks" />
        <p className={styles.message}>Loading tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorBox}>
        <p>⚠️ {error}</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className={styles.empty}>
        <p>📭 No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className={styles.heading}>📌 Your Tasks ({tasks.length})</h2>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
