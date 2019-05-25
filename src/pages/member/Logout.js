import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

const Logout = () => {
    localStorage.clear();
    return (
        <Redirect exact to="/" />
    )
}

export default Logout