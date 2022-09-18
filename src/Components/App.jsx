import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Home from './home/Home'
export default function App() {
  return (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  )
}
