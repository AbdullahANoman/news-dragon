import React from 'react';
import NavigationBar from '../Pages/Home/NavigatioBar/NavigationBar';
import Login from '../Pages/Login/Login';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </>
    );
};

export default LoginLayout;