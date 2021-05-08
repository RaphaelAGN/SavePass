import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoriesList from './pages/CategoriesList';
import Accounts from './pages/AccountsSaved';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainPage} />
            <Route path="/categories" component={CategoriesList} />
            <Route path="/accounts" component={Accounts} />
        </BrowserRouter>
    )
}

export default Routes;