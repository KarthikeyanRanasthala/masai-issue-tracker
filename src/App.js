import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { HomePage } from './Pages/Home';
import { IssuesPage } from './Pages/Issues';

const App = () => {
    return (
        <BrowserRouter>
            <Link to='/'><h4 className='center black-text'>MIT - Masai Issue Tracker</h4></Link>
            <Switch>
                <Route path='/' exact render={(props) => <HomePage {...props} />} />
                <Route path='/:id'  render={props => <IssuesPage {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;