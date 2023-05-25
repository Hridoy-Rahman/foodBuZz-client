import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) {
            navigate('/login', { state: { from: location.pathname } });
        }
    }, [user, navigate, location]);

    if (loading) {
        return <button className="btn btn-square loading text-center"></button>;
    }

    if (user?.email) {
        return children;
    }

    return null;
};

export default PrivateRoute;
