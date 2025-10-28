import useTodoStore from "./store/store";
import { useState } from "react";
import "./App.css";

function App() {
  const { todos, addTodo, removeTodo, updateTodo, toggleComplete } =
    useTodoStore();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please enter your todo first!");
      return;
    }
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            placeholder=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <label>Todo here...</label>
          <button className="addBtn" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>

        <div className="table_container mt-3">
          <h2 className="font-bold text-2xl mb-3 underline">Todo List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Todo</th>
                <th>Completed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((t, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td
                    style={{
                      textDecoration: t.completed ? "line-through" : "",
                    }}
                  >
                    {t.newTodo}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => {
                        if (t.completed) {
                          console.log("Not completed!");
                        } else {
                          console.log("Completed! " + t);
                        }
                        toggleComplete(i);
                      }}
                      className="cursor-pointer"
                    />
                  </td>
                  <td>
                    <button onClick={() => removeTodo(i)}>Remove</button>
                    <button
                      onClick={() => (
                        updateTodo(i, setInputValue(t.newTodo)), removeTodo(i)
                      )}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
