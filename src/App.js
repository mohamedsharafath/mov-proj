import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Button } from '@mui/material';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import React,{useState} from 'react';
import Login from './pages/login1/email';


function App() {

  const [check,setCheck] = useState(false);



  const Handle = () =>{
    alert("Are you sure you want to logout");
    setTimeout(() => { 
      setCheck(true);
  }, 1000); 
  }
  return (
    <>
    {check ? (<Login/>) : 
        <div className="App">
          <Router>
            <Header />
              <Routes>
                  <Route index element={<Home />}></Route>
                  <Route path="movie/:id" element={<Movie/>}></Route>
                  <Route path="movies/:type" element={<MovieList/>}></Route>
                  <Route path="/*" element={<h1>Error Page</h1>}></Route>
              </Routes>
          </Router>
          <form onSubmit={Handle}>
          <div className='btn'><Button variant="outlined" type='submit' size='large' >LOGOUT</Button></div>
          </form>
      </div>
  }
  </>
  );
}

export default App;
