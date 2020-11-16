import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import SheltersMap from '../components/SheltersMap';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/app" component={SheltersMap} />
        </Switch>
        </BrowserRouter>
    )
}
