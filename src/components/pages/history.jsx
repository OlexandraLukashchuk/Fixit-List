import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../../styles/historyStyle.css";

const History = ({ completedTasks }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="history">
      <div className="nameHistory">History
        <button type="button" className="batnBack" onClick={handleGoBack}>Back</button>
      </div>
      <div className="text">
        {completedTasks.length === 0 ? (
          <p>No results</p>
        ) : (
          completedTasks.map((task) => (
            <div key={task.id} className="task-item">
              <input type="checkbox" checked={true} readOnly />
              <div>
                <h3>Task name: {task.taskName}</h3>
                <p>Description: {task.description}</p>
                <p>Deadline: {task.deadline}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    completedTasks: state.task.completedTasks,
  };
};

export default connect(mapStateToProps)(History);
