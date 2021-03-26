import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home"
import Add from "./components/Add"
import Edit from "./components/Edit"
const App = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/edit/:id" component={Edit} />
                <Redirect to="/" />
            </Switch>
            
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))

