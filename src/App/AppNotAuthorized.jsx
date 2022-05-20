import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Registration from './../components/Authorization/Registration';
import MessageElement from './../components/UI/MessageElement';
import Authorisation from './../components/Authorization/Authorisation';

const AppNotAuthorized = ({error}) => {
    return (
        <Routes >
            <Route path="/" element={< Authorisation />} />
            <Route path="/registration" element={< Registration />} />
            <Route path="*" element={< Authorisation />} />
            {error && < MessageElement type="error" message={error} />}
        </Routes>
    )
}

export default AppNotAuthorized