import React, { Component } from 'react'
import Map from '../images/map.jpg'

export default class Community extends Component {
    render() {
        return (
            <div>
                <h2 className = "communityHeading">Quis eius.</h2>
                <div className="community">
                    <p>Magnam voluptatem so officia or ab. Laborum nihil so laborum, so ipsam voluptas and fugit. Architecto excepteur, tempor yet inventore quia, quisquam rem. Enim adipisci. Quaerat fugiat and exercitationem. Totam. Et modi but nihil and irure magni yet consequuntur. Nulla ratione yet magnam or aspernatur so iste so laborum. Consectetur doloremque for sed or laudantium but doloremque. Nostrud aliquam, and sint or adipisicing and architecto, si and nesciunt. Exercitationem voluptate ea corporis so sequi ipsa. Accusantium natus cupidatat, iure or eu so do. Fugit architecto for eos, dolorem for cupidatat dolor so tempora. Adipisicing in yet magnam for dolores, but et but quis for aliqua. Eum. Quaerat omnis so beatae natus id. Esse voluptate nostrud for voluptatem quae voluptatem consectetur. Magni magna irure. </p>
                    <img
                        src={Map}
                        alt="Map to community"
                        className="map"
                    />
                </div>
            </div>
        )
    }
}