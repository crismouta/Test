import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const auth = localStorage.getItem('auth_token');
    PrivateRoutes.propTypes = {
        children: PropTypes.any
    }

    return (
        auth ? children : <Navigate to='/login' />
    )
};

export default PrivateRoutes;