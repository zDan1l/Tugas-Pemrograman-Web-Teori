import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

// General Pages - Proyek Tugas
const BlankPage = lazy(() => import('./general-pages/BlankPage'));
const MyBlankPage = lazy(() => import('./general-pages/MyBlankPage'));
const Page1 = lazy(() => import('./general-pages/Page1'));
const Page2 = lazy(() => import('./general-pages/Page2'));
const Page3 = lazy(() => import('./general-pages/Page3'));
const Page4 = lazy(() => import('./general-pages/Page4'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {/* General Pages Routes */}
          <Route path="/blank-page" component={ BlankPage } />
          <Route path="/my-blank-page" component={ MyBlankPage } />
          <Route path="/page1" component={ Page1 } />
          <Route path="/page2" component={ Page2 } />
          <Route path="/page3" component={ Page3 } />
          <Route path="/page4" component={ Page4 } />

          {/* Redirect root ke page pertama */}
          <Redirect to="/page1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;