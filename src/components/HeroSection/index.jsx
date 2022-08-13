import React from 'react'
import SearchBar from '../Searchbar'
import background from '../../Assets/images/hero-image.jpg'


function HeroSection() {
  return (
    <section className="px-40 py-40 bg-[url('Assets/images/hero-image.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Book Shelf For Book Lovers to Enjoy
      </h1>
      <p className="max-w-2xl mb-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Search Your Favourite Books with us, and Explore. You can find everything on our website. Start Now.
      </p>
      <SearchBar/>
    </section>
  )
}

export default HeroSection