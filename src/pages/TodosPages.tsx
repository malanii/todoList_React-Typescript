import React, {useState, useEffect} from 'react';
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces/interfaces";



export const TodosPages: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [newTodo, ...prev])
    };
    const toggleHandler = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }));
    };
    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Вы уверены что хотите удалить элемент?');
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </>
    )
};