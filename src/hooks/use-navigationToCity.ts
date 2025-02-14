import { useNavigate } from "react-router-dom";

export const useNavigateToCity = () => {
  const navigate = useNavigate();
  return (name: string, lat: number, lon: number) => {
    navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
  };
};
