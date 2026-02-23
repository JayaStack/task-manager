import { useState, useEffect, useCallback } from 'react';
import TaskForm from './components/TaskForm/TaskForm.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import EditTaskModal from './components/EditTaskModal/EditTaskModal.jsx';
import * as api from './api/taskApi.js';
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.fetchTasks();
      setTasks(res.data.data);
    } catch (err) {
      setError('Failed to load tasks. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleCreate = async (taskData) => {
    try {
      const res = await api.createTask(taskData);
      setTasks((prev) => [res.data.data, ...prev]);
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to create task');
    }
  };

  const handleEditOpen = (task) => setEditingTask(task);

  const handleUpdate = async (id, taskData) => {
    try {
      const res = await api.updateTask(id, taskData);
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? res.data.data : t))
      );
      setEditingTask(null);
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await api.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      alert('Failed to delete task. Please try again.');
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>📋 Task Manager</h1>
        <p className={styles.subtitle}>Organize your work, one task at a time.</p>
      </header>
      <main className={styles.main}>
        <TaskForm onSubmit={handleCreate} />
        <TaskList
          tasks={tasks}
          loading={loading}
          error={error}
          onEdit={handleEditOpen}
          onDelete={handleDelete}
        />
      </main>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={handleUpdate}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}

export default App;
