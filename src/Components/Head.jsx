import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const style = {
    head: {
        color: '#F0E68C',
        "text-align": 'center',
    },
    p: {
        "text-align": 'center',
        "font-style": 'italic',
        margin: '30px auto'

    },
    navbar: {
        padding: '5px',
        margin: '10px auto',
    },
    a:{
        width: '150px',
        color: '#fdfef6',
    },
    logo:{
        display: 'flex',
        "justify-content": 'center',
        "height": '50px',
    },

}

function Head() {
    return (
        <div className="container-fluid">
        <header id="header" className="row">
            <div id="logo-container">             
                <h1 style={style.head}>German Food</h1>
                <div style={style.logo}>
                <img src="./images/flagGermany.png"/>
                </div>
            </div>
            <p style={style.p}>Maior site da Gastronomia Alemã do Brasil</p>
        </header>
        <nav style={style.navbar} class="container">
            <div class="row justify-content-center">
                <a style={style.a}href="#">Cadastre-se</a>
                <a style={style.a}href="#">Clientes</a>
                <a style={style.a}href="#">Cardápio</a>
                <a style={style.a}href="#">Sobre nós</a>
            </div>
        </nav>
    </div>
            
    );
  }
  
  export default Head;