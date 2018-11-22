import React, { Component } from 'react'
import Balcony from '../images/balcony.jpg'

export default class Description extends Component {
    render() {
        return (
            <div className="communityDescription">
            <img
                src = {Balcony}
                alt = "Balcony and trees"
                className = "communityImage"
                />
                <p>Cat ipsum dolor sit amet, nisi. Ipsum commodo but nisi but natus. Excepteur pariatur numquam tempora fugiat laboriosam and sunt. Quisquam. Ex. Ratione ab exercitation ullamco and ut. Anim unde occaecat, ipsum inventore magna dolorem. </p>
                
            </div>
        )
    }
}