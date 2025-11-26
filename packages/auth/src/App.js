import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const generateCLassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateCLassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route exact path="/auth/signup">
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}