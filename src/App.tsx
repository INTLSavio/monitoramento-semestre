import React, { useState } from 'react';
import Modal from 'react-modal'
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

function App() {
  

  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
