import React from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Nav from './Components/NAV/Nav'
import Slide from './Components/SLIDE/Slide'
import Products from '../src/Components/PRODUCTS/Products';
import Footer from '../src/Components/FOOTER/Footer'
import Copyright from '../src/Components/COPYRIGHT/Copyright'

import About from '../src/Backend/ABOUT/About'
import Contacts from '../src/Backend/CONTACTS/Contacts'
import Mobile from './Backend/MOBILE/Mobile'
import Writetous from './Backend/WRITETOUS/Writetous'

import Items from './Components/ITEMS/Item/Item'
import Details from './Components/ITEMS/Item/Details'

class App extends React.Component {

    render() {
        return (
            <Router>
                <Nav/>
                <Slide />
                <Switch>
                    <Route path='/' exact>
                        <Products />
                    </Route>
                    <Route path='/category/:category'>
                        <Products />
                    </Route>
                    <Route path='/area/:area'>
                        <Products />
                    </Route>
                    <Route path='/about' exact>
                        <About />
                    </Route>
                    <Route path='/contacts'>
                        <Contacts />
                    </Route>
                    <Route path='/details'>
                        <Details />
                    </Route>
                    <Route path='/items'>
                        <Items />
                    </Route>
                    <Route path='/mobile'>
                        <Mobile />
                    </Route>
                    <Route path='/writetous'>
                        <Writetous />
                    </Route>
                </Switch>
                <Footer />
                <Copyright />
            </Router>
        );
    }
}

export default App;
