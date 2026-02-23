import styles from './TaskItem.module.css';

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed':   return styles.badgeCompleted;
    case 'In Progress': return styles.badgeInProgress;
    default:            return styles.badgePending;
  }
};

const formatDate = (isoString) =>
  new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <li className={styles.card}>
      <div className={styles.topRow}>
        <h3 className={styles.title}>{task.title}</h3>
        <span className={`${styles.badge} ${getStatusClass(task.status)}`}>
          {task.status}
        </span>
      </div>
      {task.description && (
        <p className={styles.description}>{task.description}</p>
      )}
      <div className={styles.footer}>
        <span className={styles.date}>📅 {formatDate(task.createdAt)}</span>
        <div className={styles.actions}>
          <button
            className={styles.editBtn}
            onClick={() => onEdit(task)}
            aria-label="Edit task"
          >
            ✏️ Edit
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => onDelete(task._id)}
            aria-label="Delete task"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
