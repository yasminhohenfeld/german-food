import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState } from 'react';


const style = {
    title: {
        color: 'white',
        display: 'flex',
        "justify-content": 'center',
        margin: '50px',  
    },
    image1: {
      height: "250px",
      "max-width": "300px",
      "max-height": "300px",
      "min-width": "200px",
      "min-height": "200px",
      "margin-bottom": "10px",
    },
    image2: {
      height: "250px",
      "max-width": "300px",
      "max-height": "300px",
      "min-width": "200px",
      "min-height": "200px",
      "margin-bottom": "10px",
    },
    image3: {
      height: "250px",
      "max-width": "300px",
      "max-height": "300px",
      "min-width": "200px",
      "min-height": "200px",
      "margin-bottom": "10px",
    },
    image4: {
      height: "250px",
      "max-width": "300px",
      "max-height": "300px",
      "min-width": "200px",
      "min-height": "200px",
      "margin-bottom": "10px",
    },
    image5: {
      height: "250px",
      "max-width": "300px",
      "max-height": "300px",
      "min-width": "200px",
      "min-height": "200px",
      "margin-bottom": "10px",
    }
}

function Body() {

  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (cardId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId]
    }));
  };

    return (
      <div>
        <h3 style={style.title}>Conheça as nossas estrelas da casa</h3>
        {/* galeria */}
        <div class="container" id="gallery-container">
        <div class='row gx-md-5'>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image1}src="./images/strudel.png"/>                                                 
          <h3>Strudel</h3>
          <p class="secondary-color">Sobremesa alemã com maçã</p>
          <a class="btn btn-warning"  onClick={() => toggleDetails('strudel')}>Detalhes</a>
          {showDetails['strudel'] && (
              <p>Deliciosa sobremesa tradicional alemã feita com maçãs frescas. O strudel é uma massa folhada recheada com maçãs e especiarias, 
              servida quente e geralmente acompanhada de uma bola de sorvete de baunilha.
              </p>
            )}
        </div>
          
        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image2}src="./images/Eisbein.jpg"/>
          <h3>Eisbein</h3>
          <p class="secondary-color">Joelho de porco servido com chucrute</p>
          <a class="btn btn-warning"  onClick={() => toggleDetails('eisbein')}>Detalhes</a>
          {showDetails['eisbein'] && (
              <p>Prato clássico da culinária alemã, o Eisbein é um joelho de porco defumado e cozido até ficar macio. 
              É servido com chucrute e batatas, proporcionando uma combinação irresistível de sabores defumados e agridoces.
              </p>
            )}
        </div>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image3}src="./images/Schnitzel.jpeg"/>
          <h3>Schnitzel</h3>
          <p class="secondary-color">Fatia fina de carne empanada</p>
          <a class="btn btn-warning"  onClick={() => toggleDetails('schnitzel')}>Detalhes</a>
          {showDetails['schnitzel'] && (
              <p>Uma deliciosa fatia fina de carne empanada e frita, o Schnitzel é um prato muito apreciado na Alemanha.
                 Geralmente é feito com carne de porco, mas também pode ser preparado com frango ou vitela.
              </p>
            )}
        </div>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image4}src="./images/download.jpeg"/>
          <h3>Schweinsbraten</h3>
          <p class="secondary-color">Porco servido com batatas e legumes</p>
          <a class="btn btn-warning" onClick={() => toggleDetails('schweinsbraten')}>Detalhes</a>
          {showDetails['schweinsbraten'] && (
              <p>É um prato suculento de carne de porco assada, 
              temperada com ervas e especiarias. É geralmente servido com batatas assadas e legumes frescos, proporcionando uma refeição reconfortante e saborosa.
              </p>
            )}
        </div>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image5}src="./images/bretzel.jpg"/>
          <h3>Bretzel</h3>
          <p class="secondary-color">O famoso pão alemão</p>
          <a class="btn btn-warning" onClick={() => toggleDetails('bretzel')}>Detalhes</a>
          {showDetails['bretzel'] && (
            <p>
              É um quitute macio por dentro e levemente crocante por fora. É tradicionalmente polvilhado com sal grosso e pode ser saboreado como um lanche ou acompanhamento.
            </p>
          )}
        </div>

        </div>
        </div>
    </div>
    );
};



export default Body;