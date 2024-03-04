import Nav from './Components/Nav';
import MovieList from './Components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WatchList from './Components/WatchList';
import MovieDetails from './Components/MovieDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutWithHeader from './Components/LayoutWithHeader';
import Signup from './Components/Signup';
import { useLanguage } from './Components/Context/LanguageContext';
import React, { Suspense } from 'react';

function App() {


  const LayoutWithHeader = React.lazy(()=>import('./Components/LayoutWithHeader'));
  const MovieList = React.lazy(()=>import('./Components/MovieList'));
  const MovieDetails = React.lazy(()=>import('./Components/MovieDetails'));
  const WatchList = React.lazy(()=>import('./Components/WatchList'));
  const Signup = React.lazy(()=>import('./Components/Signup'));

  const { language } = useLanguage();
  return (
    <div >

<BrowserRouter>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Nav />

<Suspense>
        <Routes>
          
          <Route element={< LayoutWithHeader />} >
            <Route path='' element={<MovieList />} />

          </Route>


          <Route path='/MovieDetails/:id' element={<MovieDetails />} />
          <Route path='/WatchList' element={<WatchList />} />
          <Route path='/signup' element={<Signup />} />




        </Routes>
        </Suspense>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
