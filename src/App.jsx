import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleWelcome = () => {
    if (name.trim()) {
      navigate(`/welcome/${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="card">
      <h1>Welcome App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleWelcome}>Go</button>
    </div>
  );
}

export default App;
