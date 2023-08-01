import React from 'react'
import Edit from '../components/pages/edit'
import Home from '../components/pages/home'
import History from '../components/pages/history'
import Form from '../components/pages/form'
import { Routes, Route, Navigate } from 'react-router-dom'

const RouterPage = () => {
    return (
        <>
           
            <Routes>
                <Route path='/' element={<Navigate to='home' />} />
                <Route path='home' element={<Home />} />
                <Route path='edit' element={<Edit />} />
                <Route path='history' element={<History/>}/>
                <Route path='form' element={<Form/>}/>
            </Routes>
           
        </>
    );
}

export default RouterPage