import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Editor } from './pages/Editor'
import { Diff } from './pages/Diff'
import './styles/index.sass'

export const App: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Editor} exact />
                <Route path="/diff" component={Diff} />
            </Switch>
        </Router>
    )
}
