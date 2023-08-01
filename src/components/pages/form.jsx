import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/action/taskAction';
import "../../styles/formStyle.css";
import { useNavigate } from 'react-router-dom';

const Form = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ taskName, description, deadline });
    setTaskName('');
    setDescription('');
    setDeadline('');
    navigate('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="create-new-task">Create new task
          <button type="button" className="btnBack" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btnSubmit">
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskData) => dispatch(addTask(taskData)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
