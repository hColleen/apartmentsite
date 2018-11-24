
import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

const photos = [
    {
        src: "https://source.unsplash.com/dO3qTKxwik0/800x599",
        width: 4,
        height: 2
    },
    {
        src: "https://source.unsplash.com/oTJ92KUXHls/800x599",
        width: 3,
        height: 2
    },
    {
        src: "https://source.unsplash.com/LIx9GfMB6ZM/800x599",
        width: 3,
        height: 2
    },
    {
        src: "https://source.unsplash.com/6viJObrmnBw/800x599",
        width: 3,
        height: 2
    },
    {
        src: "https://source.unsplash.com/GqbU78bdJFM/800x599",
        width: 3,
        height: 2
    },
    {
        src: "https://source.unsplash.com/6TY_WrJTwSI/800x599",
        width: 4,
        height: 2
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
            <div>
                <h2>Dolore.</h2>
            <div className="unitDescriptions">
                <p>Sequi lorem and magni do or illum yet nesciunt. Unde aute modi. Reprehenderit. Voluptas. Aperiam si or ea tempora yet vitae so ratione vitae. Molestiae adipisci explicabo esse for officia for veritatis nostrum. Consequatur. Molestiae. Nesciunt odit but amet and sequi ab. Exercitation dolor yet in or accusantium. Odit id veritatis minima. Ipsum ea yet ex. Aliquid in. </p>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
            </div>
        )
    }
}