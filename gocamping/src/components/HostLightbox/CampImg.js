import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
// 營地圖
import campImg01 from './campImg/01.jpg'
import campImg02 from './campImg/02.jpg'
import campImg03 from './campImg/03.jpg'

const images = [
  // '//placekitten.com/1500/500',
  // '//placekitten.com/4000/3000',
  // '//placekitten.com/800/1200',
  // '//placekitten.com/1500/1500',
  campImg01,
  campImg02,
  campImg03,
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button className="btn btn-outline-sunshine" type="button" onClick={() => this.setState({ isOpen: true })}>
          點我看詳細
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}