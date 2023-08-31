import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

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
          <a class="btn btn-warning" href="#">Detalhes</a>
        </div>
          
        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image2}src="./images/Eisbein.jpg"/>
          <h3>Eisbein</h3>
          <p class="secondary-color">Joelho de porco servido com chucrute</p>
          <a class="btn btn-warning" href="#">Detalhes</a>
        </div>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image3}src="./images/Schnitzel.jpeg"/>
          <h3>Schnitzel</h3>
          <p class="secondary-color">Fatia fina de carne empanada</p>
          <a class="btn btn-warning" href="#">Detalhes</a>
        </div>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image4}src="./images/download.jpeg"/>
          <h3>Schweinsbraten</h3>
          <p class="secondary-color">Porco servido com batatas e legumes</p>
          <a class="btn btn-warning" href="#">Detalhes</a>
        </div>

        <div class="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
          <img style={style.image5}src="./images/bretzel.jpg"/>
          <h3>Bretzel</h3>
          <p class="secondary-color">O famoso pão alemão</p>
          <a class="btn btn-warning" href="#">Detalhes</a>
        </div>

        </div>
        </div>
    </div>
    );
};



export default Body;