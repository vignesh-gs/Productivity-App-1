import React from "react";
import "./Todo.css";
import { FiCheck } from "react-icons/fi";

export const Todo = ({ content, time }) => {
  return (
    <div className="todo-card">
      <div className="todo-nav">
        <div className="todo-assigned">V</div>
        <div className="todo-goal">
          <div className="todo-timegiven">{time}</div>
          <div className="todo-done">
            <FiCheck />
          </div>
        </div>
      </div>
      <div className="todo-content">{content}</div>
    </div>
  );
};
