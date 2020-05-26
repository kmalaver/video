import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = ({cover, title , year, contentRating, duration }) => (
  <div class="carousel-item">
    <img class="carousel-item__img" src={cover} alt={title}  />
    <div class="carousel-item__details">
      <div>
        <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon"/> 
        <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon"/> 
      </div>
      <p class="carousel-item__details--title">{title}</p>
      <p class="carousel-item__details--subtitle">
        {`${year} ${contentRating} , ${duration}`}
      </p>
    </div>
  </div>
)

CarouselItem.propTypes = {
  cover : PropTypes.string,
  title : PropTypes.string,
  year : PropTypes.number,
  contentRating : PropTypes.string,
  duration : PropTypes.string,
}

export default CarouselItem