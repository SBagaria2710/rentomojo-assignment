import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Welcome = lazy(()=> import('./components/Welcome'));
const PageNotFound = lazy(()=> import('./components/404'));

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/theme/theme.css';

export class App extends React.Component<{}, {}> {
    render() {
        return(
            <Router>
                <Suspense fallback={<h1>This is a fallback, Lol. Deal with it!</h1>}>
                    <Switch>
                        <Route exact path='/' component={() => <Welcome />} />
                        <Route exact path='/pageNotFound' component={() => <PageNotFound />} />
                        <Route exact path='/*' component={() => <PageNotFound />} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;