import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home';
import { Provas } from './pages/Provas';
import { Calculadora } from './pages/Calculadora';

export function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Provas} path="/provas" />
            <Route component={Calculadora} path="/calculadora" />
        </BrowserRouter>
    );
}