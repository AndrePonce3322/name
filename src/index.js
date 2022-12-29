import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';
import './Curriculum/curriculum.css'

// Divs
import Informacion from './informacion';
import Perfil from './curriculum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Perfil />
    <Informacion/>
    
  </React.StrictMode>
);


