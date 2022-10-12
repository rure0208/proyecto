import React from 'react'
import {Carousel} from '@mantine/carousel';
import { BackgroundImage,Image, Center, Text, Box } from '@mantine/core';
import Layout from './compionents/Layout';

const Home = () => {
  return (
    <div>

    <Layout tituloPagina="Inicio">
    <Carousel slideSize="70%" height={200} slideGap="md" loop withControls={false} withIndicators>
    <Carousel.Slide>
      <Image
        src=" https://st4.depositphotos.com/20547288/23159/i/600/depositphotos_231598016-stock-photo-abstract-purple-smoke-mist-fog.jpg"
        radius="sm"/>
      </Carousel.Slide>
      <Carousel.Slide> 
        <Image
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        radius="sm"/>
        </Carousel.Slide>
  
        <Carousel.Slide>
      <Image
        src=" https://st4.depositphotos.com/20547288/23159/i/600/depositphotos_231598016-stock-photo-abstract-purple-smoke-mist-fog.jpg"
        radius="sm"/>
      </Carousel.Slide>
      <Carousel.Slide> 
        <Image
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        radius="sm"/>
        </Carousel.Slide>    
      {/* ...other slides */}
    </Carousel>

      
    </Layout>

   
    </div>
  )
}

export default Home