import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar fixed-top pb-0 navbar-expand-lg navbar-dark" style={{ backgroundColor: `rgba(0, 134, 179, 0.9)` }}>
                <a className="navbar-brand mr-5 h1" href="#">Totam</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Amenities</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Floor Plans</a>
                        </li>
                    </ul>
                    <form className="form-inline">
                            <button className="btn btn-outline-light ml-5" type="button">Contact Us</button>
                            <button className="btn btn-outline-light ml-5" type="button">Apply</button>
                        </form>
                </div>
            </nav>
        )
    }
}