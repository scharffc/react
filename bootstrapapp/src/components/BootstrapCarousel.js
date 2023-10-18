import React from 'react'
import { Carousel } from 'react-bootstrap';

// The carousel uses https://picsum.photos for the 2 first images
// and holder.js for the 3rd image
class BootstrapCarousel extends React.Component {
    render() {
        return (
            <div>
                <h3>Carousel</h3>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src="https://picsum.photos/500/300?img=1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide</h3>
                            <p>A photo from picsum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/500/300?img=2"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>A photo from picsum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide</h3>
                            <p>Using holder.js.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default BootstrapCarousel;