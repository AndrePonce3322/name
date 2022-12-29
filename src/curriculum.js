import './App.css';
import './Curriculum/curriculum.css'

const descripcion = "Soy desarrollador web, trabajo en los lenguajes de programacion";

function Perfil() {
  return (
        <div class="container">
              <div class='imagencurri'>
                  <div class="fondo"></div>
                </div>
              <div class="contenedorImg">
                  <div class="MiImg">
                    <div class="foto"></div>
                  </div>
                  <div class="Nombre">
                      <h4>André Ponce</h4>
                      <h6>Ingeníero en sistemas</h6>
                  </div>
                  <div class="Iconos">
                  <i class="bi bi-facebook blueColor"></i>
                  <i class="bi bi-messenger blueColor"></i>
                  <i class="bi bi-whatsapp greenColor"></i>
                  <i class="bi bi-twitter blueColor"></i>
                  <i class="bi bi-discord purpleColor"></i>
                  <i class="bi bi-linkedin blueColor"></i>
                </div>

                <p class="parrafo">{descripcion} <a href='https://es.wikipedia.org/wiki/HTML'>HTML</a><span>, </span>
                <a href='https://es.wikipedia.org/wiki/CSS'>CSS</a><span>, </span>
                <a href='https://es.wikipedia.org/wiki/JavaScript'>JavaScript</a><span> y </span>
                <a href='https://es.wikipedia.org/wiki/PHP'>PHP</a><span>. </span>
                </p>

                

              </div>  
             
        </div>  
  );
}

export default Perfil;
