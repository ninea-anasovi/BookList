import React from 'react'
import Booklist from '../Booklist'
import HeroSection from '../HeroSection'
import FixedButton from '../FixedButton'
import { BookContext, ModalContext } from '../../context'
import { useState } from 'react'


function Layout() {

  const [bookData, setBookData] = useState ([])
  const [ show, setShow ] = useState(false);
  const [ bookItem, setBookItem ] = useState({})


  return (  
      <>
        <BookContext.Provider value={{bookData, setBookData}}>
            <HeroSection/>
            <ModalContext.Provider value={{show, setShow, bookItem, setBookItem}}>
              <Booklist/>
            </ModalContext.Provider>
        </BookContext.Provider>
        <FixedButton/>
      </>
     

  )
}

export default Layout