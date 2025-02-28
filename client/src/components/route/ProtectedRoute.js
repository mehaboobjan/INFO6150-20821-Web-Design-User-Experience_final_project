import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, isAdmin }) => {
  const { isAuth, loading, user } = useSelector((state) => state.auth);

  if (loading) return null; // Or a loading spinner

  if (!isAuth) return <Navigate to="/login" replace />;
  if (isAdmin && user.role !== 'admin') return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;