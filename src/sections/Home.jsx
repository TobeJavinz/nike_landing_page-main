import React from 'react'

import {
 
  Footer,
  Hero,
  PopularProducts,
  Services,
  SuperQuality,
} from "./";
import { Nav } from '../components';

const Home = () => {
  return (
    // test
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding mb-12'>
        <SuperQuality />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className=' bg-blue-900  padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default Home