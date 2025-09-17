import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// Optional: define interface for the server response
interface ServerResponse {
  message?: string;
  error?: string;
}

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleWelcome = async () => {
    if (name.trim() && password.trim()) {
      try {
        const response = await fetch("http://localhost:4000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        });

        const data: ServerResponse = await response.json();

        if (response.ok) {
          // Navigate to WelcomePage and pass the server message in state
          navigate(`/welcome/${encodeURIComponent(name)}`, {
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

  return (
    <div className="card">
      <h1>Welcome to Cookie Clicker!</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleWelcome}>Go</button>
    </div>
  );
};

export default App;
