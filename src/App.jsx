import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movies from './components/Movies';
import Tvshow from './components/Tvshow';
import People from './components/People';
import Moviedetails from './components/Moviedetails';
import Tvdetails from './components/Tvdetails';
import Persondetails from './components/Persondetails';
import Trailer from './components/Trailer';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>

    <div className='w-full h-screen bg-[#0C0C0C]'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/movie/details/:id" element={<Moviedetails/>}>
        <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/tv" element={<Tvshow/>} />
        <Route path="tv/details/:id" element={<Tvdetails/>}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/person" element={<People/>} />
        <Route path="/person/details/:id" element={<Persondetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;
