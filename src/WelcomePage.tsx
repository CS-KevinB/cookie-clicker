import { useParams, useLocation, Location } from "react-router-dom";

// Optional interface for location state
interface LocationState {
  message?: string;
}

const WelcomePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const location = useLocation() as Location & { state: LocationState };
  const message = location.state?.message || "Welcome!";

  return (
    <div className="card">
      <h1>Welcome, {name ? decodeURIComponent(name) : "Guest"}!</h1>
      <p>{message}</p>
    </div>
  );
};

export default WelcomePage;