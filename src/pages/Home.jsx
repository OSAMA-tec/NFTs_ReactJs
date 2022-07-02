import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import Liveauction from '../components/UI/live action/Liveauction'
import SellerSection from '../components/UI/Seller-section/SellerSection'
import Trending from '../components/UI/Trending-section/Trending'
import StepSection from '../components/UI/Step-section/StepSection'
// import Particles from './components/Animation/Particles';
const Home = () => {
  return (
     <>
  <HeroSection/>
  <Liveauction/>
  <SellerSection/>
  <Trending/>
  <StepSection/>
  </>
  );
}

export default Home;