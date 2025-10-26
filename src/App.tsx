import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 
interface ServerResponse {
  message?: string;
  error?: string;
}

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username.trim() && password.trim()) {
      try {
        const response = await fetch("http://localhost:4000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: username, password }),
        });

        const data: ServerResponse = await response.json();

        if (response.ok) {
          navigate(`/welcome/${encodeURIComponent(username)}`, {
            state: { message: data.message },
          });
        } else {
          alert(data.error || "Something went wrong!");
        }
      } catch (err) {
        console.error(err);
        alert("Server error. Please try again later.");
      }
    } else {
      alert("Please enter both a username and password.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-app">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">🍪 Cookie Clicker 🍪</h1>
          <p className="login-subtitle">Login to start baking!</p>
        </div>

        <div className="login-form">
          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              className="login-input"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              className="login-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <button className="login-button" onClick={handleLogin}>
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
