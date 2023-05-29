import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PrivateDashboard = () => {
  const isAuthenticated = false; // Replace with your authentication logic
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/private/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <div>
      <h1>This is the Private Dashboard Page</h1>
      {/* Add your private dashboard content here */}
      <Link to="/contactus">Contactus</Link>
    </div>
  ) : (
    <useNavigate to="/private/login" replace />
  );
};

export default PrivateDashboard;
