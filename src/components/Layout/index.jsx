import React from 'react'
import Booklist from '../Booklist'
import HeroSection from '../HeroSection'
import FixedButton from '../FixedButton'
import { BookContext } from '../../context'
import { useState } from 'react'

function Layout() {

  const [bookData, setBookData] = useState ([])

  return (  
      <>
        <BookContext.Provider value={{bookData, setBookData}}>
            <HeroSection/>
            <Booklist/>
        </BookContext.Provider>
        <FixedButton/>
      </>
     

  )
}

export default Layout