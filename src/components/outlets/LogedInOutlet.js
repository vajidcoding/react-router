import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isLoggedIn, isPathAllowed } from '../../utils/Common';

function LogedInOutlet() {

    const {pathname} = useLocation();
    const isAllowed = isPathAllowed(pathname);

    if(isLoggedIn() && isAllowed) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />
    }
}

export default LogedInOutlet;