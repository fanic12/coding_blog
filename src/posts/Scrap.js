import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const ControlledCarousel = ({
  introduction,
  introduction1,
  introduction2,
  image,
  image1,
  image2
}) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='d-block w-100' src={image} alt='First slide' />
        <Carousel.Caption>
          <h3>첫번째 사진</h3>
          <p>{introduction}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={image1} alt='First slide' />

        <Carousel.Caption>
          <h3>두번째 사진</h3>
          <p>{introduction1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={image2} alt='First slide' />

        <Carousel.Caption>
          <h3>세번째 사진</h3>
          <p>{introduction2}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
