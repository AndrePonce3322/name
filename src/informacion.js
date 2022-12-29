import './App.css';
import './Curriculum/curriculum.css'
import './Curriculum/informacion.css'

const estilos = {
    color: "var(--bs-blue)"
}

function Informacion() {
    return (
        <div class="Informacion">
            <div class="text-bg-primary p-3">Informacion de Curriculum Vitae</div>
            <div class="parrafointro">
                <p class=" introdccion text-lg-start">
                    Me gustaría que tengan en cuenta mi candidatura para futuros procesos de selección porque me encantaría ser parte de su equipo de trabajo. Estaré encantado de ampliarles mi perfil profesional si así lo requieren, de modo que estaré localizable al teléfono +8801-1529 o por correo electrónico <a href='mailto:andreponce41@gmail.com'>andreponce417@gmail.com</a>.
                </p>
            </div>
            <div class="tabla">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Librerías</th>
                            <th scope="col">Conocimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bootstrap</td>
                            <td style={estilos}>8/10</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>React</td>
                            <td style={estilos}>9/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="margin-top text-bg-primary p-3">Experiencia personal</div>

            {/* <i class="bi bi-cpu"></i> */}

            <div class="IconosPresentacion">
                <div class="icono-1">
                    <i class="bi bi-cpu"></i>
                    <p>Experiencia en CPU</p>
                </div>
                <div class="icono-1">
                    <i class="bi bi-code-slash"></i>
                    <p>Experiencia tres años consecutivos</p>
                </div>
                <div class="icono-1">
                    <i class="bi bi-laptop"></i>
                    <p>Autodidacta</p>
                </div>
            </div>

        </div>
    );
}

export default Informacion;
