import React from 'react';
import LandingPage from '../SubComponents/LandingPage';
import LatestProducts from '../SubComponents/LatestProducts';

const Home = ({products}) => {
  return (
    <>
      <LandingPage/>
      <LatestProducts products={products}/>
    </>
  )
}

export default Home
