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
          <Route path="/profil-mahasiswa" component={ Page1 } />
          <Route path="/form-pendaftaran" component={ Page2 } />
          <Route path="/daftar-mahasiswa" component={ Page3 } />

          {/* Redirect root ke halaman pertama */}
          <Redirect to="/profil-mahasiswa" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;