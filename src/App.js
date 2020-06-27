import React from 'react';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  document.title = 'react-form-validation'
  return (
    <div className="app">
      <Formulario></Formulario>
    </div>
  );
}

export default App;
