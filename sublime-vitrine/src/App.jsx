import React, { useState } from 'react';
import './App.css';
import sakura from './assets/sakura.png';
import namorados from './assets/namorados.jpeg';
import namorados1 from './assets/namorados1.jpeg';

// --- IMPORTAÇÕES DAS IMAGENS ---
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

import namorados0 from './assets/namorados0.jpeg';
import namorados2 from './assets/namorados2.jpeg';
import namorados3 from './assets/namorados3.jpeg';
import namorados4 from './assets/namorados4.jpeg';
import namorados5 from './assets/namorados5.jpeg';
import namorados6 from './assets/namorados6.jpeg';
import namorados7 from './assets/namorados7.jpeg';
import namorados8 from './assets/namorados8.jpeg';
import namorados9 from './assets/namorados9.jpeg';
import namorados10 from './assets/namorados10.jpeg';
import namorados11 from './assets/namorados11.jpeg';
import namorados12 from './assets/namorados12.jpeg';
import namorados13 from './assets/namorados13.jpeg';
import namorados15 from './assets/namorados15.jpeg';
import namorados16 from './assets/namorados16.jpeg';
import namorados17 from './assets/namorados17.jpeg';
import namorados18 from './assets/namorados18.jpeg';
import namorados19 from './assets/namorados19.jpeg';
import namorados20 from './assets/namorados20.jpeg';
import namorados21 from './assets/namorados21.jpeg';
import namorados22 from './assets/namorados22.jpeg';
import namorados23 from './assets/namorados23.jpeg';
import namorados24 from './assets/namorados24.jpeg';
import namorados25 from './assets/namorados25.jpeg';
import namorados26 from './assets/namorados26.jpeg';
import namorados27 from './assets/namorados27.jpeg';

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
    <img 
      src={namorados1} 
      alt="Logo" 
      className="logo-banner-gigante" 
      style={{ 
        width: 'auto', 
        maxHeight: '350px', 
        objectFit: 'contain',
        borderRadius: '15px', /* Arredonda as bordas */
        border: '3px solid var(--rosa-chiclete)' /* Adiciona a borda rosa escuro */
      }} 
    />
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
                <div className="secao-item" onClick={() => setSecaoInterna('dia-dos-namorados')}>
                  <div className="circulo-icone">👩‍❤️‍👨</div>
                  <span>Dia dos Namorados</span>
                </div>
              </div>
            )}

            {/* VITRINE DE BUQUÊS */}
            {secaoInterna === 'buques' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Nossos Buquês</h2>
                <div className="vitrine-vendas">
                  {[
                    { img: namorados, nome: "❤️", preco: "Consulte aqui" }
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>R$ {p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>←</button>
              </div>
            )}

            {/* DIA DOS NAMORADOS */}
            {secaoInterna === 'dia-dos-namorados' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Dia dos Namorados</h2>
                <div className="vitrine-vendas">
                  {[
                    { img: namorados0, nome: "Buquê Love", preco: "160,00" },
                    { img: namorados2, nome: "Box 20 rosas", preco: "440,00" },
                    { img: namorados3, nome: "Buquê 100 rosas naturais importadas", preco: "2.000,00" },
                    { img: namorados4, nome: "Buquê Ferrero Rocher", preco: "350,00" },
                    { img: namorados5, nome: "Buquê 2 rosas e astromelias", preco: "70,00" },
                    { img: namorados6, nome: "Buquê tradicional 12 rosas", preco: "270,00" },
                    { img: namorados7, nome: "Botão de Rosa importada (não acompanha chocolate)", preco: "20,00" },
                    { img: namorados8, nome: "Cone rosa importada", preco: "30,00" },
                    { img: namorados9, nome: "Baldinho de Cerveja 1", preco: "110,00" },
                    { img: namorados10, nome: "Baldinho de Cerveja 2", preco: "110,00" },
                    { img: namorados11, nome: "Baldinho de Cerveja 3", preco: "110,00" },
                    { img: namorados12, nome: "Baldinho de Cerveja 4", preco: "110,00" },
                    { img: namorados13, nome: "Buquê 6 girassóis ", preco: "180,00" },
                    { img: namorados15, nome: "Buquê 3 rosas", preco: "90,00"},
                    { img: namorados16, nome: "Caixa com gaveta chocolates", preco: "389,00" },
                    { img: namorados17, nome: "Caixa trufas coraçãos", preco: "75,00" },
                    { img: namorados18, nome: "Lata Cacau Show trufas", preco: "45,00" },
                    { img: namorados19, nome: "Box Pringles", preco: "100,00" },
                    { img: namorados20, nome: "Caixa porta joias bombons finos Cacau Show", preco: "85,00" },
                    { img: namorados21, nome: "Cesta Urso e Licor", preco: "370,00" },
                    { img: namorados22, nome: "Especialmene para você Ferrero Rocher", preco: "150,00" },
                    { img: namorados23, nome: "Box urso Cacau Show com balão", preco: "389,00" },
                    { img: namorados24, nome: "Cesta Especialmete pra você Cerveja Artesanal (aberta)", preco: "150,00" },
                    { img: namorados25, nome: "Cesta Barca Cacau Show", preco: "195,00" },
                    { img: namorados26, nome: "Box astromelias e rosas importadas", preço: "200,00"},
                    { img: namorados27, nome: "Cesta cacau show com Licor Casa Spanner", preco: "370,00" }
                    
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>R$ {p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>←</button>
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
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>←</button>
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
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>←</button>
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
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>←</button>
              </div>
            )}

            {/* VITRINE DE FLORICULTURA */}
            {secaoInterna === 'floricultura' && (
              <div className="area-produtos">
                <h2 className="titulo-sobre">Floricultura</h2>
                <div className="vitrine-vendas">
                  {[
                    // Mantido o array vazio original
                  ].map((p, index) => (
                    <div className="card-venda" key={index}>
                      <div className="foto-prod"><img src={p.img} alt={p.nome} className="imagem-real" /></div>
                      <h3>{p.nome}</h3>
                      <p>R$ {p.preco}</p>
                      <button onClick={() => comprarWpp(p.nome)}>Pedir no WhatsApp</button>
                    </div>
                  ))}
                </div>
                <button className="botao-voltar-secao" onClick={() => setSecaoInterna(null)}>←</button>
              </div>
            )}

          </div>
        )}

        {abaAtiva === 'sobre' && (
          <div className="bloco-texto-sobre">
            <h2 className="titulo-sobre">Nossa Essência</h2>
            <p className="assinatura">Somos especialistas em presentes, porque entendemos que presentear vai muito além de comprar algo e entregar, se trata de demonstrar que aquela pessoa é especial e merece dedicação na escolha e produção de cada detalhe, estamos sempre em busca de inovação, mas sem perder a nossa essence que é a proximidade com nossos clientes, que se tornam nossos amigos. Nascemos de um acaso, nosso trabalho é um amor construído, entregamos sorrisos e compartilhamos momentos, e entre laços e flores, entregamos em cada presente um pouquinho de nós, vamos construindo juntos essa história “Sublime”, que está só começando… Com amor, Equipe Sublime ✨</p>
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