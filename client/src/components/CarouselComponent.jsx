import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

const CarouselComponent = () => {
  const data = [
    {
      id: 1,
      title: 'Slide 1',
      description: 'Slide 1 description',
      image: 'https://loremflickr.com/800/300'
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'Slide 2 description',
      image: 'https://picsum.photos/800/300'
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'Slide 3 description',
      image: 'https://loremflickr.com/800/300'
    },
    {
      id: 4,
      title: 'Slide 4',
      description: 'Slide 4 description',
      image: 'https://unsplash.it/800/300'
    },
    {
      id: 5,
      title: 'Slide 5',
      description: 'Slide 5 description',
      image: 'https://picsum.photos/800/300'
    }
  ]
  return (
    <>
      <Carousel>
        {data.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <p className="legend">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default CarouselComponent