import React from 'react'

import Header from './components/Header/';
import Newsletter from './components/Newsletter/';
import Footer from './components/Footer/';
import Showcase from './components/Showcase';
import Fullbanner from './components/Fullbanner';

export default function App() {
  return (
    <>
      <Header />
      <Fullbanner />
      <Showcase name="Mais Vendidos" />
      <Newsletter />
      <Footer />
    </>
  )
}
