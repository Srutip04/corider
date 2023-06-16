import React from 'react';
import { Route, Routes } from "react-router-dom";
import Chat from './pages/Chat';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App max-w-[728px] mx-auto text-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:userId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
