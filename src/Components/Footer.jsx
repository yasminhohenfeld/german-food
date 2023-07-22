import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const style = {
    Footer: {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "margin-top": "50px",
        "border-top": "0.5px solid #ccc",
        padding: "30px",
    }, 
    icons: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
    },
    color: {
        color: "yellow",
        "margin-right": "50px",
    },
    copy: {
        "margin-top": "30px",
        "margin-right": "50px",
    },
    p: {
        "margin-right": "60px",
        
    }
}

function Footer() {
    return (
      <footer style={style.Footer}className="Footer">
        <p style={style.p}>Nos encontre nas redes sociais</p>
        <div style={style.icons}>
            <div>
                <a style={style.color} href="#"><i className="bi bi-facebook"></i></a>
            </div>
            <div>
                <a style={style.color} href="#"><i className="bi bi-instagram"></i></a>
            </div>
            <div>
                <a style={style.color} href="#"><i className="bi bi-twitter"></i></a>
            </div>
        </div>
        <p style={style.copy}> Art &copy;</p>
      </footer>
      
    );
  }
  
  export default Footer;