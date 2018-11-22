
import React, { Component } from 'react'
import Gallery from "react-photo-gallery"
import Livingroom from '../images/livingroom.jpg'
import Livingroom1 from '../images/livingroom1.jpg'
import Livingroom2 from '../images/livingroom2.jpg'
import Livingroom3 from '../images/livingroom3.jpg'
import Bedroom from '../images/bedroom.jpg'
import Bedroom1 from '../images/bedroom1.jpg'

const photos = [
    {
        src: "/images/livingroom.jpg",
        width: 4,
        height: 3
    },
    {
        src: { Livingroom1 },
        width: 1,
        height: 1
    },
    {
        src: { Livingroom2 },
        width: 3,
        height: 4
    },
    {
        src: { Livingroom3 },
        width: 3,
        height: 4
    },
    {
        src: { Bedroom },
        width: 3,
        height: 4
    },
    {
        src: { Bedroom1 },
        width: 4,
        height: 3
    }
]


export default class Units extends Component {
    render() {
        return (
            <div className="unitDescriptions">
                <p>Dolore. Sequi lorem and magni do or illum yet nesciunt. Unde aute modi. Reprehenderit. Voluptas. Aperiam si or ea tempora yet vitae so ratione vitae. Molestiae adipisci explicabo esse for officia for veritatis nostrum. Consequatur. Molestiae. Nesciunt odit but amet and sequi ab. Exercitation dolor yet in or accusantium. Odit id veritatis minima. Ipsum ea yet ex. Aliquid in. </p>
                <Gallery photos={photos} />
            </div>
        )
    }
}