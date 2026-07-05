import { Navigate } from "react-router-dom";
import { getItem } from "../../utils/localstorage";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = getItem();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
