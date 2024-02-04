import { useState } from "react";
import { useRef } from "react";

function SobreMi() {

    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
    return ( 
        <section className='SObre mi' style={{ maxWidth: '700px' }}>
        <h1>
          Sobre mi
        </h1>
        
        <div style={{ position: 'relative', display:'flex' }}>

          <video
            ref={videoRef}
            autoPlay
            loop
            style={{ width: '50%', height: 'auto', position: 'relative', marginRight:'20px' }}
            onClick={togglePlayPause}
            alt="Mis motivaciones"
          >
            <source src="src\assets\video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          <p>
          Estudiante de Ingeniería en Software con interés en las áreas de
          Inteligencia Artificial, Analítica de Datos, Back-End, Front-End y marketing
          digital . Me considero una persona proactiva, geek, audiófilo, autodidacta,
          organizado y responsable. Capaz de resolver cualquier problema de
          manera lógica y eficiente
        </p>
        </div>

      </section>
     );
}

export default SobreMi;