import React, { useState } from 'react';
import { connect } from 'react-redux';
import { completeTask, editTask, moveToHistory, deleteTask } from '../../redux/action/taskAction';
import '../../styles/homeStyle.css';
import { FaSearch } from 'react-icons/fa';
import Edit from './edit';


const Home = ({ tasks, completeTask, editTask, moveToHistory, deleteTask }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const handleEditClick = (task) => {
    setEditedTask(task);
    setShowEditForm(true);
  };

  const handleCompletedClick = (taskId) => {
    completeTask(taskId);
    moveToHistory(taskId);
  };

  const handleDeleteClick = (taskd) => {
    deleteTask(taskd);
  };
  
  const filteredTasks = tasks.filter((task) => {
    const taskName = task.taskName.toLowerCase();
    const description = task.description.toLowerCase();
    const deadline = task.deadline;

    return (
      taskName.includes(searchTerm.toLowerCase()) ||
      description.includes(searchTerm.toLowerCase()) ||
      deadline.includes(searchTerm)
    );
  });

  const handleEditSubmit = (editedTaskData) => {
    editTask(editedTaskData);
    setShowEditForm(false);
    setEditedTask(null);
  };

  return (
    <div className="home">
      <div className="search">
        <FaSearch className="search-icon" color="#888" />
        <input
          type="text"
          placeholder="Search by name, description or date"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="task-container">
      {filteredTasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCompletedClick(task.id)}
            key={`checkbox-${task.id}`}
          />
          <div>
            <h3>Task name: {task.taskName}</h3>
            <p>Description: {task.description}</p>
            <p>Deadline: {task.deadline}</p>
          </div>
          <div className="button-container">
          <button onClick={() => handleEditClick(task)}>Edit</button>
            <button onClick={() => handleCompletedClick(task.id)}>Completed</button>
            <button onClick={() => handleDeleteClick(task.id)}>Delete</button> 
          </div>
        </div>
      ))}
      </div>
      {showEditForm && (
        <div className="overlay">
        <div className="edit-form-container">
          <Edit task={editedTask} handleEditSubmit={handleEditSubmit} />
        </div>
      </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTask: (taskId) => dispatch(completeTask(taskId)),
    editTask: (editedTaskData) => dispatch(editTask(editedTaskData)),
    moveToHistory: (taskId) => dispatch(moveToHistory(taskId)),
    deleteTask: (taskdelete) => dispatch(deleteTask(taskdelete)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
