import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

// Halaman Tugas
const Page1 = lazy(() => import('./general-pages/Page1'));
const Page2 = lazy(() => import('./general-pages/Page2'));
const Page3 = lazy(() => import('./general-pages/Page3'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {/* Routes Halaman Tugas */}
          <Route path="/blank-page-1" component={ Page1 } />
          <Route path="/blank-page-2" component={ Page2 } />
          <Route path="/blank-page-3" component={ Page3 } />

          {/* Redirect root ke halaman pertama */}
          <Redirect to="/blank-page-1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;