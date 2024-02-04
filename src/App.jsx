import './App.css'
import SobreMi from 'src//components/Sobremi'
import Inicio from 'src/components/Inicio.jsx'


function App() {

  return (
    <div className='Curriculum Vitae'>
      <Inicio />
      <SobreMi />
      <section className="skills-section">
        <h1>Habilidades</h1>

        <table>
          <tr>
            <th>Habilidad</th>
          </tr>
          <tr>
            <td>C#</td>
          </tr>
          <tr>
            <td>Java</td>
          </tr>
          <tr>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>React</td>
          </tr>
          <tr>
            <td>Node.js, API REST</td>
          </tr>
          <tr>
            <td>Programación Orientada a Objetos</td>
          </tr>
          <tr>
            <td>Patrones de diseño</td>
          </tr>
          <tr>
            <td>Python</td>
          </tr>
          <tr>
            <td>Limpieza de datos</td>
          </tr>
          <tr>
            <td>Power BI - Tableau</td>
          </tr>
          <tr>
            <td>Análisis de datos</td>
          </tr>
          <tr>
            <td>Modelos de predicción</td>
          </tr>
          <tr>
            <td>SQL y NoSQL</td>
          </tr>
          <tr>
            <td>Git y GitHub</td>
          </tr>
        </table>
      </section>
      <section className="education-section">
        <h1>
          Educacion
        </h1>
        <table id="informacionAcademicaTabla">
          <tr>
            <th>Período</th>
            <th>Descripción</th>
          </tr>
          <tr>
            <td>2017 - 2019</td>
            <td>Curso en Electrónica y Telecomunicaciones</td>
          </tr>
          <tr>
            <td>2019 - Actualidad</td>
            <td>Estudiante de Ingeniería en Software
            </td>
          </tr>
        </table>
      </section>
      <section className="contact-section">
        <h1>
          Contacto
        </h1>
        <h3>
          Telf: +593 995380728
        </h3>
        <h3>
          Correo: martin.fq1908@gmail.com
        </h3>
        <h3>
          Github: github.com/martinfq
        </h3>
      </section>
    </div>
  )
}

export default App
