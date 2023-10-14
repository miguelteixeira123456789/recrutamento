// Todo.js
import { useState } from "react";
import { Button, Title } from "@mantine/core";
import setImage from "pages/set.jpeg";

export default function Todo() {
  const [todos, setTodos] = useState(["Todo #1", "Todo #2", "Todo 3"]);
  const [inputText, setInputText] = useState("");

  const imageStyles = {
    width: '200px', 
    height: 'auto', 
    display: 'block',
    margin: '0 auto',
    marginBottom: '20px',
  };

  const fontStyles = {
    fontFamily: 'Ultra Fresh - Demo', 
  };

  const buttonStyles = {
    fontFamily: 'Ultra Fresh - Demo',
    backgroundColor: '#FF5733', 
    color: '#FFFFFF',
  };

  const componentStyles = {
    fontFamily: 'Ultra Fresh - Demo',
  };

  // Function to handle item deletion
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Function to handle item addition
  const handleAdd = () => {
    if (inputText) {
      const updatedTodos = [...todos, inputText];
      setTodos(updatedTodos);
      setInputText("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-200" style={componentStyles}>
      <div className="w-4/5 max-w-md rounded-lg border shadow-lg p-4">
        <Title order={2} className="text-center mb-4" style={fontStyles}>
          SET - To Do List
        </Title>
        
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src={setImage.src}
            alt="SET Logo"
            style={imageStyles}
          />
        </div>

        <div className="p-2 border-b flex flex-row items-center mb-4">
          <input
            type="text"
            placeholder="Add a new item..."
            className="p-2 w-full rounded border focus:outline-none focus:ring focus:ring-blue-400"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button onClick={handleAdd} variant="filled" color="red" style={buttonStyles}>
            Add
          </Button>
        </div>
        <div className="p-4">
          {todos.map((todo, index) => (
            <div key={index} className="bg-white rounded-lg p-3 mb-4 flex flex-row items-center justify-between">
              <h2 className="text-lg font-semibold" style={{ ...fontStyles }}>{todo}</h2>
              <Button onClick={() => handleDelete(index)} variant="filled" color="red" style={buttonStyles}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
