import React from 'react';
import './TodoCard.css'; // Stil faylini import qilish

function TodoCard({ todo }) {
    return (
      <div className="todo-container">
        <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <h3 className="todo-title">{todo.title}</h3>
                <p className="todo-status">
                    {todo.completed ? 'Completed' : 'Not Completed'}
                </p>
            </div>
        </div>

      </div>
    );
}

export default TodoCard;
