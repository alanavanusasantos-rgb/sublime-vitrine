import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import sakura from './assets/sakura.png';

// Importação das imagens dos Buquês
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
            <p className="slogan-texto">
              ✨Presentear é um ato de amor - Entregamos sorrisos em Ronda Alta e região💐
            </p>
            <button className="botao-explorar" onClick={() => setAbaAtiva('explorar')}>
              Explorar Coleção
            </button>
          </div>
        )}

        {abaAtiva === 'explorar' && (
          secaoInterna === 'buques' ? (
            <div className="area-produtos">
              <h2 className="titulo-sobre">Nossos Buquês</h2>
              <div className="vitrine-vendas">
                
                <div className="card-venda">
                  <div className="foto-prod"><img src={buque14} alt="Buquê coreano 5 rosas" className="imagem-real" /></div>
                  <h3>Buquê coreano 5 rosas</h3>
                  <p>R$ 160,00</p>
                  <button onClick={() => comprarWpp('Buquê coreano 5 rosas')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque12} alt="Solitário girassol Van Gogh" className="imagem-real" /></div>
                  <h3>Solitário girassol Van Gogh</h3>
                  <p>R$ 50,00</p>
                  <button onClick={() => comprarWpp('Solitário girassol Van Gogh')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque11} alt="Cone Rosa" className="imagem-real" /></div>
                  <h3>Cone Rosa</h3>
                  <p>R$ 30,00</p>
                  <button onClick={() => comprarWpp('Cone Rosa')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque13} alt="Buquê 3 rosas" className="imagem-real" /></div>
                  <h3>Buquê 3 rosas</h3>
                  <p>R$ 90,00</p>
                  <button onClick={() => comprarWpp('Buquê 3 rosas')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque10} alt="Buquê rosas e flores mistas" className="imagem-real" /></div>
                  <h3>Buquê rosas mistas + flores mistas</h3>
                  <p>R$ 190,00</p>
                  <button onClick={() => comprarWpp('Buquê rosas mistas + flores mistas')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque8} alt="Buquê tradicional 15 rosas" className="imagem-real" /></div>
                  <h3>Buquê tradicional 15 rosas vermelhas</h3>
                  <p>R$ 375,00</p>
                  <button onClick={() => comprarWpp('Buquê tradicional 15 rosas vermelhas')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque9} alt="Box rosas" className="imagem-real" /></div>
                  <h3>Box rosas e astromélias</h3>
                  <p>R$ 199,00</p>
                  <button onClick={() => comprarWpp('Box rosas e astromélias')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque7} alt="Cartão Coração" className="imagem-real" /></div>
                  <h3>Cartão Coração com buquê solitário</h3>
                  <p>R$ 59,90</p>
                  <button onClick={() => comprarWpp('Cartão Coração com buquê solitário')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque5} alt="Buquê 10 rosas" className="imagem-real" /></div>
                  <h3>Buquê tradicional 10 rosas</h3>
                  <p>R$ 270,00</p>
                  <button onClick={() => comprarWpp('Buquê tradicional 10 rosas')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque6} alt="Buquê 7 rosas" className="imagem-real" /></div>
                  <h3>Buquê 7 rosas mistas G</h3>
                  <p>R$ 230,00</p>
                  <button onClick={() => comprarWpp('Buquê 7 rosas mistas G')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque4} alt="Buquê 3 rosas Pink" className="imagem-real" /></div>
                  <h3>Buquê 3 rosas Pink</h3>
                  <p>R$ 90,00</p>
                  <button onClick={() => comprarWpp('Buquê 3 rosas Pink')}>Pedir no WhatsApp</button>
                </div>

                <div className="card-venda">
                  <div className="foto-prod"><img src={buque3} alt="Solitário 1 girassol" className="imagem-real" /></div>
                  <h3>Solitário 1 girassol e rosa azul</h3>
                  <p>R$ 80,00</p>
                  <button onClick={() => comprarWpp('Solitário 1 girassol e rosa azul')}>Pedir no WhatsApp</button>
                </div>

              </div>
              <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>
                ← Voltar para Categorias
              </button>
            </div>
          ) : (
            <div className="container-explorar">
              <div className="grid-secoes">
                <div className="secao-item" onClick={() => setSecaoInterna('buques')}>
                  <div className="circulo-icone">💐</div>
                  <span>Buquês</span>
                </div>
                <div className="secao-item">
                  <div className="circulo-icone">🧺</div>
                  <span>Cestas</span>
                </div>
                <div className="secao-item">
                  <div className="circulo-icone">🎁</div>
                  <span>Personalizados</span>
                </div>
                <div className="secao-item">
                  <div className="circulo-icone">🧉</div>
                  <span>Chimas</span>
                </div>
              </div>
            </div>
          )
        )}

        {abaAtiva === 'sobre' && (
          <div className="bloco-texto-sobre">
            <h2 className="titulo-sobre">Nossa Essência</h2>
            <p className="texto-sobre-cursivo">
              A Sublime nasceu de um acreditar profundo: o de que um presente 
              é muito mais que um objeto, é um abraço que a gente envia. 
              Entregamos sorrisos em Ronda Alta e região com todo carinho que você merece.
            </p>
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
        <p>© 2026 Sublime Presentes Criativos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;