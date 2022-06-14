import Head from 'next/head'
import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navigationbar';
import Intro from '../components/Intro';
import Trending from '../components/Trending';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function Home() {
 const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)


 return (
   <div className='htmlAll'>
     <Head>
       <title>Movie List</title>
       <meta name="description" content="Movie List" />
       <link rel="icon" href="/favicon.ico" />
     </Head>

     <div className='myBG'>
       <NavigationBar></NavigationBar>

       <Intro scroll = {executeScroll}></Intro>
     </div>
    
      <div className='trending' ref={myRef}>
         <Trending></Trending>
      </div>
   </div>
 )
 
}
