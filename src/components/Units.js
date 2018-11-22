
import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Livingroom from './images/livingroom.jpg'

const photos = [
    {
        src: { Livingroom },
        width: 4,
        height: 3
    },
    {
        src: "/src/components/images/livingroom1.jpg",
        width: 1,
        height: 1
    },
    {
        src: "/images/livingroom2.jpg",
        width: 3,
        height: 4
    },
    {
        src: "/images/livingroom3.jpg",
        width: 3,
        height: 4
    },
    {
        src: "/images/bedroom.jpg",
        width: 3,
        height: 4
    },
    {
        src: "/images/bedroom1.jpg",
        width: 4,
        height: 3
    }
]


export default class Units extends Component {

    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        return (
            <div className="unitDescriptions">
                <p>Dolore. Sequi lorem and magni do or illum yet nesciunt. Unde aute modi. Reprehenderit. Voluptas. Aperiam si or ea tempora yet vitae so ratione vitae. Molestiae adipisci explicabo esse for officia for veritatis nostrum. Consequatur. Molestiae. Nesciunt odit but amet and sequi ab. Exercitation dolor yet in or accusantium. Odit id veritatis minima. Ipsum ea yet ex. Aliquid in. </p>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}