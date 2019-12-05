import React, {Component} from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/all';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="header">
                <Navbar.Brand href="#home" className="navbar-brand">Instagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/post/create">Create Post</Link>
                    </Nav>
                    <div inline="true">
                        <div className="user">
                            <div className="user-avatar">
                                <FaUserCircle className="user-icon" />
                            </div>
                            <div className="user-actions">
                                <Link to="/register">Register</Link>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;