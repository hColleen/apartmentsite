import React, { Component } from 'react'
import Balcony from './images/balcony.jpg'

export default class Description extends Component {
    render() {
        return (
            <div className="communityDescription">
            <div className = "row">
            <div className = "col-md-5">
            <img
                src = {Balcony}
                alt = "Balcony and trees"
                className = "communityImage"
                />
                </div>
                <div className = "col-md-7">
                <p>Cat ipsum dolor sit amet, nisi. Ipsum commodo but nisi but natus. Excepteur pariatur numquam tempora fugiat laboriosam and sunt. Quisquam. Ex. Ratione ab exercitation ullamco and ut. Anim unde occaecat, ipsum inventore magna dolorem. </p>
                </div>
            </div>
            </div>
        )
    }
}