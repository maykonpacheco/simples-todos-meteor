import { Meteor } from 'meteor/meteor';
import React,  { useState } from 'react';

export const TaskForm = () => {
    const [text , setText] = useState(""); 

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        Meteor.call('tasks.insert', text);
        
        setText("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Adicionar uma nova tarefa"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">+ Adicionar</button>
        </form>
    );
};