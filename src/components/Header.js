import React, { Component } from 'react'
import headerImage from '../images/header.jpg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <img
                    className = "headerImage"
                    src={headerImage}
                    alt="View of Community"
                />
                <h1 className="communityName">Totam</h1>
            </div>
        )
    }
}