import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import sakura from './assets/sakura.png';

// --- IMPORTAÇÕES DAS IMAGENS ---
import buque14 from './assets/buque14.jpeg';
import buque12 from './assets/buque12.jpeg';
import buque11 from './assets/buque11.jpeg';
import buque13 from './assets/buque13.jpeg';
import buque10 from './assets/buque10.jpeg';
import buque8 from './assets/buque8.jpeg';
import buque9 from './assets/buque9.jpeg';
import buque7 from './assets/buque7.jpeg';
import buque5 from './assets/buque5.jpeg';
import buque6 from './assets/buque6.jpeg';
import buque4 from './assets/buque4.jpeg';
import buque3 from './assets/buque3.jpeg';

import cesta1 from './assets/cesta1.jpeg';
import cesta2 from './assets/cesta2.jpeg';
import cesta3 from './assets/cesta3.jpeg';
import cesta4 from './assets/cesta4.jpeg';
import cesta5 from './assets/cesta5.jpeg';
import cesta6 from './assets/cesta6.jpeg';
import cesta7 from './assets/cesta7.jpeg';

import cuia1 from './assets/cuia1.jpeg';
import cuia2 from './assets/cuia2.jpeg';
import cuia3 from './assets/cuia3.jpeg';
import cuia4 from './assets/cuia4.jpeg';
import mateira2 from './assets/mateira2.jpeg';

import caneca1 from './assets/caneca1.jpeg';
import caneca2 from './assets/caneca2.jpeg';
import caneca3 from './assets/caneca3.jpeg';
import caneca4 from './assets/caneca4.jpeg';

function App() {
  const [abaAtiva, setAbaAtiva] = useState('inicio');
  const [secaoInterna, setSecaoInterna] = useState(null);

  const comprarWpp = (nomeProduto) => {
    const msg = encodeURIComponent(`Olá! Gostaria de encomendar o ${nomeProduto} que vi no site da Sublime.`);
    window.open(`https://wa.me/5554999538687?text=${msg}`, '_blank');
  };

  return (
    <div className={`container-geral ${secaoInterna ? 'modo-vitrine' : ''}`}>
      <img src={sakura} alt="" className="sakura-topo" />
      <img src={sakura} alt="" className="sakura-baixo" />
      
      <header className="nav-container">
        <div className="linha-header"></div>
        <nav className="nav-links-central">
          <a href="#" onClick={(e) => { e.preventDefault(); setAbaAtiva('inicio'); setSecaoInterna(null); }}>Início</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setAbaAtiva('sobre'); setSecaoInterna(null); }}>Sobre nós</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setAbaAtiva('contato'); setSecaoInterna(null); }}>Contato</a>
        </nav>
      </header>

      <main className="conteudo-principal">
        
        {abaAtiva === 'inicio' && (
          <div className="bloco-central">
            <img src={logo} alt="Logo Sublime" className="logo-banner-gigante" />
            <p className="slogan-texto">✨Presentear é um ato de amor💐</p>
            <button className="botao-explorar" onClick={() => setAbaAtiva('explorar')}>Explorar Coleção</button>
          </div>
        )}

        {abaAtiva === 'explorar' && (
          <div className="container-explorar" style={{ width: '100%' }}>
            
            {/* GRID DE CATEGORIAS */}
            {!secaoInterna && (
              <div className="grid-secoes">
                <div className="secao-item" onClick={() => setSecaoInterna('buques')}>
                  <div className="circulo-icone">💐</div>
                  <span>Buquês</span>
                </div>
                <div className="secao-item" onClick={() => setSecaoInterna('cestas')}>
                  <div className="circulo-icone">🧺</div>
                  <span>Cestas</span>
                </div>
                <div className="secao-item" onClick={() => setSecaoInterna('personalizados')}>
                  <div className="circulo-icone">🎁</div>
                  <span>Personalizados</span>
                </div>
                <div className="secao-item" onClick={() => setSecaoInterna('chimas')}>
                  <div className="circulo-icone">🧉</div>
                  <span>Chimas</span>
                </div>
              </div>
            )}

            {/* VITRINE DE BUQUÊS */}
            {secaoInterna === 'buques' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Nossos Buquês</h2>
                <div className="vitrine-vendas">
                  {[
                    { img: buque14, nome: "Buquê coreano 5 rosas", preco: "160,00" },
                    { img: buque12, nome: "Solitário girassol Van Gogh", preco: "50,00" },
                    { img: buque11, nome: "Cone Rosa", preco: "30,00" },
                    { img: buque13, nome: "Buquê 3 rosas", preco: "90,00" },
                    { img: buque10, nome: "Buquê rosas mistas", preco: "190,00" },
                    { img: buque8, nome: "Buquê 15 rosas vermelhas", preco: "375,00" },
                    { img: buque9, nome: "Box rosas e astromélias", preco: "199,00" },
                    { img: buque7, nome: "Cartão Coração", preco: "59,90" },
                    { img: buque5, nome: "Buquê 10 rosas", preco: "270,00" },
                    { img: buque6, nome: "Buquê 7 rosas mistas G", preco: "230,00" },
                    { img: buque4, nome: "Buquê 3 rosas Pink", preco: "90,00" },
                    { img: buque3, nome: "Solitário girassol e rosa azul", preco: "80,00" }
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>R$ {p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>← Voltar</button>
              </div>
            )}

            {/* VITRINE DE CESTAS */}
            {secaoInterna === 'cestas' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Cestas Especiais</h2>
                <div className="vitrine-vendas">
                  {[
                    { img: cesta1, nome: "Cesta personalizável", preco: "Consulte aqui" },
                    { img: cesta2, nome: "Cesta personalizável", preco: "Consulte aqui" },
                    { img: cesta3, nome: "Cesta personalizável", preco: "Consulte aqui" },
                    { img: cesta4, nome: "Cesta personalizável", preco: "Consulte aqui" },
                    { img: cesta5, nome: "Cesta personalizável", preco: "Consulte aqui" },
                    { img: cesta6, nome: "Cesta personalizável", preco: "Consulte aqui" },
                    { img: cesta7, nome: "Cesta personalizável", preco: "Consulte aqui" }
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>{p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>← Voltar</button>
              </div>
            )}

            {/* VITRINE DE CHIMAS */}
            {secaoInterna === 'chimas' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Linha Chimas</h2>
                <div className="vitrine-vendas">
                  {[
                    { img: cuia1, nome: "Cuia gravada", preco: "R$ 100,00" },
                    { img: cuia2, nome: "Cuia gravada", preco: "R$ 100,00" },
                    { img: cuia3, nome: "Cuia glitter", preco: "R$ 90,00" },
                    { img: cuia4, nome: "Cuia gravada", preco: "R$ 100,00" },
                    { img: mateira2, nome: "Mateira 3pçs", preco: "R$ 290,00" }
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>{p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>← Voltar</button>
              </div>
            )}

            {/* VITRINE DE PERSONALIZADOS */}
            {secaoInterna === 'personalizados' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Personalizados</h2>
                <div className="vitrine-vendas">
                  {[
                    { img: caneca1, nome: "Caneca Caricatura", preco: "R$ 40,00" },
                    { img: caneca2, nome: "Caneca Caricatura", preco: "R$ 40,00" },
                    { img: caneca3, nome: "Caneca Baby Yoda", preco: "Consulte aqui" },
                    { img: caneca4, nome: "Caneca Bear", preco: "Consulte aqui" }
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>{p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>← Voltar</button>
              </div>
            )}
          </div>
        )}

        {abaAtiva === 'sobre' && (
          <div className="bloco-texto-sobre">
            <h2 className="titulo-sobre">Nossa Essência</h2>
            <p className="assinatura">Com amor, Equipe Sublime ✨</p>
          </div>
        )}

        {abaAtiva === 'contato' && (
          <div className="bloco-texto-sobre">
            <h2 className="titulo-sobre">Fale com a Gente</h2>
            <div className="container-botoes-contato">
              <a href="https://wa.me/5554999538687" target="_blank" rel="noreferrer" className="link-contato-social">💬 WhatsApp</a>
              <a href="https://www.instagram.com/sublimepresentes_ronda/" target="_blank" rel="noreferrer" className="link-contato-social">📸 Instagram</a>
            </div>
          </div>
        )}
      </main>

      <footer className="footer-copyright">
        <p>© 2026 Sublime Presentes Criativos.</p>
      </footer>
    </div>
  );
}

export default App;