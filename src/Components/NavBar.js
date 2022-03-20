import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, NavLink } from "react-bootstrap";
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import DarkModeToggle from './Theme/DarkModeToggle';
import ModalAlert from "./ModalAlert";


const NavBar = () => {

    return ( <>
        <Router>
            <div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <DarkModeToggle/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <NavLink as={ Link } to={ "/home" } eventKey={ 1 }>خانه</NavLink>
                                <NavLink as={ Link } to={ "/about" } eventKey={ 2 }>درباره ما</NavLink>
                                <NavLink as={ Link } to={ "/about" } eventKey={ 3 }>ارتباط با ما</NavLink>
                                <NavLink as={ Link } to={ "/about" } eventKey={ 4 }>ادمین</NavLink>
                            </Nav>
                            <Form className="d-flex">
                                <ModalAlert text={ 'عضویت' } btnCat={ 'btn btn-success' } icon={ 'fa fa-user me-2' }/>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route>
                        <Error/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </> );
};

export default NavBar;