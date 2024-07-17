import React from 'react'
import CarouselComponent from '../components/CarouselComponent'
import Work from '../components/Work'
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <>
      <Portfolio />
      <CarouselComponent />
      <Work />
    </>
  )
}

export default Home