import i18next from 'i18next'
import { initReactI18next } from "react-i18next"

i18next
    .use(initReactI18next)
    .init({
        fallbackLng:'en',
        resources: {
            en: {
                translation: {
                    gallery:'Gallery',
                    tour:'Tour',
                    about:'\\unexCoder is a composer and computer artist from Argentina. He use programming languages to develop and build hybrid performance systems that combine live coded algorithms with analog devices and computer generated graphics. His audiovisual pieces push the viewer into a deep abstract volumetric aural and visual experience. He has performed in festivals and concerts in Argentina, Spain, Germany, France and Netherlands',
                    network:'Network',
                    discography:'Discography',
                    hyper:'_hypercubx exists between a mathematical dimension and the singularity of its volumetric projection . The algorithmic flow models numerical meta-forms into sculptures of sound and light. The system is hacked in performance to break structures and highlight noise',
                    rider:'Tech rider',
                    sound:'PA & Monitoring',
                    snd:'Main PA 2.1 (possible multichannel setups up to 8 channels). Stereo monitoring on stage',
                    video:'Screen',
                    scrn:'Flat led screen or proyector. Aspect ratio 16:9. 5 meters width or more. Full HD / 60 fps.',
                    stage:'Stage',
                    stg:'2 x 1 x 0.8 meters stand. 2 (or more) direct boxes. HDMI output. Video monitor'
                }
            },
            spa: {
                translation: {
                    gallery:'Galería',
                    tour:'Fechas',
                    about:'\\unexCoder es un compositor y artista informático de Argentina. Utiliza lenguajes de programación para desarrollar y construir sistemas performáticos híbridos que combinan algoritmos y técnicas de "live coding" con dispositivos analógicos y gráficos generados por computadora. Sus piezas audiovisuales empujan al espectador a una profunda experiencia visual y auditiva volumétrica y abstracta. Ha actuado en festivales y conciertos en Argentina, España, Alemania, Francia y Holanda.',
                    network:'Redes',
                    discography:'Discografía',
                    hyper:'_hypercubx existe entre una dimensión matemática y la singularidad de su proyección volumétrica. El flujo algorítmico modela meta-formas numéricas en esculturas de sonido y luz. El sistema es intervenido en performance para romper estructuras y realzar el ruido',
                    rider:'Rider técnico',
                    sound:'PA y Monitoreo',
                    snd:'Sistema principal 2.1 (posible arreglo multicanal hasta 8 canales). Monitoreo stereo en escena',
                    video:'Pantalla',
                    scrn:'Pantalla led plana o proyector. Relación de aspecto 16:9. Ancho 5 metros o más. Full HD / 60 fps.',
                    stage:'Set escenario',
                    stg:'Superficie plana de 2 x 1 x 0.8 metros. 2 (o más) cajas directas. Salida HDMI. Monitor de video'
                }
            },
        }
    })