import React, { useState } from 'react';
import "../../styles/editStyle.css";
const Edit = ({ task, handleEditSubmit }) => {
  const [editedTask, setEditedTask] = useState({
    taskName: task.taskName,
    description: task.description,
    deadline: task.deadline,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit({ ...editedTask, id: task.id });
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={editedTask.taskName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={editedTask.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={editedTask.deadline}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default Edit;
