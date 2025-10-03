import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, { newTodo, completed: false }],
    })),
  removeTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
  updateTodo: (index, newValue) =>
    set((state) => ({
      todos: state.todos.map((todo, i) => (i === index ? newValue : todo)),
    })),
  toggleComplete: (index) =>
    set((state) => ({
      todos: state.todos.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      ),
    })),
}));

export default useTodoStore;
