
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import Livingroom from '../images/livingroom.jpg'
import Livingroom1 from '../images/livingroom1.jpg'
import Livingroom2 from '../images/livingroom2.jpg'
import Livingroom3 from '../images/livingroom3.jpg'
import Bedroom from '../images/bedroom.jpg'
import Bedroom1 from '../images/bedroom1.jpg'

export default class Units extends Component {
    render() {

        const images = [
            {
                original: { Livingroom }
            },
            {
                original: { Livingroom1 }
            },
            {
                original: { Livingroom2 }
            },
            {
                original: { Livingroom3 }
            },
            {
                original: { Bedroom }
            },
            {
                original: { Bedroom1 }
            }
        ]
        return (
            <div className="unitDescriptions">
                <p>Dolore. Sequi lorem and magni do or illum yet nesciunt. Unde aute modi. Reprehenderit. Voluptas. Aperiam si or ea tempora yet vitae so ratione vitae. Molestiae adipisci explicabo esse for officia for veritatis nostrum. Consequatur. Molestiae. Nesciunt odit but amet and sequi ab. Exercitation dolor yet in or accusantium. Odit id veritatis minima. Ipsum ea yet ex. Aliquid in. </p>
                <ImageGallery items={images} />
            </div>
        )
    }
}