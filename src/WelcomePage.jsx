import { useParams } from "react-router-dom";

function WelcomePage() {
  const { name } = useParams();

  return (
    <div className="card">
      <h1>Welcome, {decodeURIComponent(name)}!</h1>
      <p>Glad to have you here.</p>
    </div>
  );
}

export default WelcomePage;
