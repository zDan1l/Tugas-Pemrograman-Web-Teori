import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/page', state: 'pagesMenuOpen'},
      {path:'/blank-page', state: 'pagesMenuOpen'},
      {path:'/my-blank-page', state: 'pagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>David Grey. H</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Manager</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          
          {/* Menu Halaman Tugas */}
          <li className={ this.isPathActive('/page') || this.isPathActive('/blank-page') || this.isPathActive('/my-blank-page') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.pagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('pagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Halaman Tugas</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-file-document-box menu-icon"></i>
            </div>
            <Collapse in={ this.state.pagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/page1') ? 'nav-link active' : 'nav-link' } to="/page1"><Trans>Profil Mahasiswa</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/page2') ? 'nav-link active' : 'nav-link' } to="/page2"><Trans>Form Input</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/page3') ? 'nav-link active' : 'nav-link' } to="/page3"><Trans>Data Mahasiswa</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/page4') ? 'nav-link active' : 'nav-link' } to="/page4"><Trans>Dashboard</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/blank-page') ? 'nav-link active' : 'nav-link' } to="/blank-page"><Trans>Blank Page</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/my-blank-page') ? 'nav-link active' : 'nav-link' } to="/my-blank-page"><Trans>My Blank Page</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);