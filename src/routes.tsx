import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home';
import { Provas } from './pages/Provas';

export function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Provas} path="/provas" />
        </BrowserRouter>
    );
}