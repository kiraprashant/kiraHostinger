import React from 'react';
import './App.css';
import Hostinger from './Hostinger';
import {BrowserRouter} from "react-router-dom"



function App() {
  return (
    <>
     <BrowserRouter>
      <Hostinger />
      </BrowserRouter>
    </>
  );
}

export default App;
