import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL || ''}/api/tasks`;

export const fetchTasks = () => axios.get(BASE_URL);
export const createTask = (taskData) => axios.post(BASE_URL, taskData);
export const updateTask = (id, taskData) => axios.put(`${BASE_URL}/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
