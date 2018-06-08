import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, About, PageNotFound} from './routes'


const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}


export default MainRoutes