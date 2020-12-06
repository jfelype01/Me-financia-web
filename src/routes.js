import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './main-page';
import Pagamentos from './pagamentos';

export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={MainPage}/>
            <Route path="/pagamentos" component={Pagamentos}/>
        </Router>
    );
}