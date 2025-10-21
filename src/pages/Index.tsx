import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/terms-of-use");
  }, [navigate]);

  return null;
};

export default Index;
