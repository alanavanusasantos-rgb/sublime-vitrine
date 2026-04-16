import React, { useState } from 'react';
import './App.css';

// Importação da Identidade Visual
import logo from "./assets/logo.png";
import sakura from "./assets/sakura.png";

// Importação das imagens dos Buquês
import buque14 from "./assets/buque14.jpeg";
import buque12 from "./assets/buque12.jpeg";
import buque11 from "./assets/buque11.jpeg";
import buque13 from "./assets/buque13.jpeg";
import buque10 from "./assets/buque10.jpeg";
import buque8 from "./assets/buque8.jpeg";
import buque9 from "./assets/buque9.jpeg";
import buque7 from "./assets/buque7.jpeg";
import buque5 from "./assets/buque5.jpeg";
import buque6 from "./assets/buque6.jpeg";
import buque4 from "./assets/buque4.jpeg";
import buque3 from "./assets/buque3.jpeg";

function App() {
  const buques = [
    { id: 14, img: buque14, nome: "Buquê Sublime 14" },
    { id: 12, img: buque12, nome: "Buquê Sublime 12" },
    { id: 11, img: buque11, nome: "Buquê Sublime 11" },
    { id: 13, img: buque13, nome: "Buquê Sublime 13" },
    { id: 10, img: buque10, nome: "Buquê Sublime 10" },
    { id: 8, img: buque8, nome: "Buquê Sublime 08" },
    { id: 9, img: buque9, nome: "Buquê Sublime 09" },
    { id: 7, img: buque7, nome: "Buquê Sublime 07" },
    { id: 5, img: buque5, nome: "Buquê Sublime 05" },
    { id: 6, img: buque6, nome: "Buquê Sublime 06" },
    { id: 4, img: buque4, nome: "Buquê Sublime 04" },
    { id: 3, img: buque3, nome: "Buquê Sublime 03" },
  ];

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo Sublime" className="logo" />
        <div className="sakura-container">
          <img src={sakura} alt="Sakura" className="sakura-decor" />
          <h1>Nossos Buquês</h1>
          <img src={sakura} alt="Sakura" className="sakura-decor" />
        </div>
      </header>

      <main className="vitrine">
        {buques.map((buque) => (
          <div key={buque.id} className="card-buque">
            <div className="img-wrapper">
              <img src={buque.img} alt={buque.nome} />
            </div>
            <div className="card-info">
              <h3>{buque.nome}</h3>
              <button className="btn-comprar">Ver Detalhes</button>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>© 2026 Sublime Presentes Criativos</p>
      </footer>
    </div>
  );
}

export default App;