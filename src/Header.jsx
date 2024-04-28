import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import picture1 from './horse.png';
import picture2 from './nature.png';
import picture3 from './phone.png';
import picture4 from './house.png';
import picture5 from './laptop.png';



const okay = (push) => push.preventDefault();

const items = [
	<img src={picture1} onDragStart={okay} role="presentation" />,
	<img src={picture2} onDragStart={okay} role="presentation" />,
	<img src={picture3} onDragStart={okay} role="presentation" />,
    <img src={picture4} onDragStart={okay} role="presentation" />,
    <img src={picture5} onDragStart={okay} role="presentation" />,
];

const Header = () => <AliceCarousel mouseTracking items={items}
activeIndex={0}
animationDuration={800}
animationType='slide'
autoPlay={true}
autoPlayControls={true}
disableSlideInfo={false}
infinite={true}
responsive={
    {
        0: {
            items: 1,
        },
        1024: {
            items: 3,
            itemsFit: 'contain',
        }
      }
}



/>;
export default Header