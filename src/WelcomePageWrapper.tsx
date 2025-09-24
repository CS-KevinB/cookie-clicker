// WelcomePageWrapper.tsx
import { useNavigate, useParams } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const WelcomePageWrapper = () => {
  const navigate = useNavigate();
  const params = useParams<{ name: string }>(); // get :name from route

  return <WelcomePage navigate={navigate} name={params.name} />;
};

export default WelcomePageWrapper;
