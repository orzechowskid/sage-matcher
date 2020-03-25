import {
    useRoutes
} from 'hookrouter';
import React, {
    Fragment,
    Suspense
} from 'react';

import Busy from './components/Busy';
import Header from './components/Header';

import styles from './App.module.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Volunteer = React.lazy(() => import('./pages/Volunteer'));

const routes = {
    '/': (props) => <Home {...props} />,
    '/login': (props) => <Login {...props} />,
    '/register': (props) => <Register {...props} />,
    '/volunteer': (props) => <Volunteer {...props} />
};

function App() {
    const currentPage = useRoutes(routes);
    console.log(`hello!`);
    console.log(currentPage);
    return (
        <Fragment>
            <header>
                <Header />
            </header>

            <main className={styles.main}>
                <Suspense fallback={<Busy />}>
                    {currentPage}
                </Suspense>
            </main>

            <footer>
                &copy; 2020 SAGE
            </footer>
        </Fragment>
  );
}

export default App;
