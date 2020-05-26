import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import "../assets/styles/App.scss"
import "../assets/styles/Media.scss"
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'


const API = 'http://localhost:3000/initalstate'

const App = () => {
  const initalstate = useInitialState(API)
  
  return (
    <div className="App">
      <Header/>
      <Search/>
      {initalstate.mylist.length > 0 &&
        <Categories>
          <Carousel>
            <CarouselItem/>
          </Carousel>
        </Categories>
      }

      <Categories>
        <Carousel>
          {initalstate.trends.map(item =>
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>
      <Footer/>
    </div>

)}
  


export default App