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
                    stg:'2 x 1 x 0.8 meters stand. 2 (or more) direct boxes. HDMI output. Video monitor',
                    workshop:'Workshop',
                    wshopTitle:'Modular Livecoding. Algorithmic control of modular synthesizers w/ Supercollider.',
                    wshopAbout:'The workshop proposes to explore the encounter between two universes as vast as they are usually isolated each other. Sound design with modular analog systems dates back to the 60\'s and the experimental processes that motivated the origin of the synthesizer industry. At the same time, the development of computers and algorithmic thinking itself gave rise to a whole series of languages and techniques that we know today as part of what we call "computer music". These ecosystems, with a priori antagonistic principles, can be integrated into an hybrid, homogeneous and effective system. In this course, we will learn to implement algorithms in Supercollider, a very powerful and open source music computing language. We will then use the generated signals to control and extend the functionality of a modular synthesizer to build a powerfull hybrid digital / analog performance instrument.',
                    summary:'Summary',
                    sum_1:'Voltage and analog signals. CV, trigger/gate.',
                    sum_2:'Digital Audio and AD/DA conversion.',
                    sum_3:'Supercollider. Server and audio engine.',
                    sum_4:'I/O Busses config.',
                    sum_5:'Language, abstractions and fundamentals.',
                    sum_6:'Sound synthesis and audio or control signals generation.',
                    sum_7:'Clocks, patterns and sequencers.',
                    sum_8:'Dinamic patching techniques and "livecoding".',
                    sum_9:'Audio signal processing.',
                    sum_10:'MIDI and controllers.',
                    luigi:'Luis Tamagnini',
                    bio:'Computer audiovisual composer. Initiated in the late 90\'s in the composition of electronic and concrete music. His work is deeply intertwined with algorithmic processes and concepts. In the mid-2000\'s, he began to investigate programming languages ​​and apply algorithmic techniques to computer music and computer graphics, developing a series of experimental audiovisual pieces. His current work is attached to a number of -not only- computacional concepts such as generativity, noise, machines, fractals and algebraical processes; as well as others meta-structural concepts like modularity and hybridization in complex systems (digital-analog, man-machines, etc) and networks. He is also interested in live-coding and improvisation.  His works include musical compositions, electronic audiovisuals performances, installations, videoart and apps, among others. He is professor and researcher at Rosario National University - UNR.',
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
                    stg:'Superficie plana de 2 x 1 x 0.8 metros. 2 (o más) cajas directas. Salida HDMI. Monitor de video',
                    workshop:'Workshop',
                    wshopTitle:'Livecoding Modular. Control algorítmico de sintetizadores modulares con Supercollider.',
                    wshopAbout:'El taller propone explorar el encuentro entre dos universos tan vastos como usualmente aislados entre sí. El diseño de sonido con sistemas analógicos modulares se remonta a los años 60 y a los procesos experimentales que motivó el origen de la industria de los sintetizadores. Al mismo tiempo, el desarrollo de las computadoras y de un pensamiento algorítmico en sí mismo fue dando origen a toda una serie de lenguajes y técnicas que hoy conocemos como parte de lo que llamamos "computación musical". Estos ecosistemas, de principios a priori antagónicos pueden ser integrados en un sistema híbrido, homogéneo y eficaz. En el curso aprenderemos a implementar algoritmos en Supercollider, un lenguaje de computación musical muy poderoso y de código abierto. Luego, usaremos las señales generadas para controlar y extender la funcionalidad de un sintetizador modular.',
                    summary:'Sumario',
                    sum_1:'Voltage y señal analógica. CV, trigger/gate.',
                    sum_2:'Audio digital y conversores AD/DA.',
                    sum_3:'Supercollider. Motor de audio y servidor.',
                    sum_4:'Configuración de entradas, salidas y buses.',
                    sum_5:'Lenguaje y abstracciones fundamentales.',
                    sum_6:'Síntesis, y generación de señales de audio y control.',
                    sum_7:'Relojes, patrones y secuenciadores.',
                    sum_8:'Técnicas de patcheo dinámico y "live coding".',
                    sum_9:'Procesamiento de audio.',
                    sum_10:'MIDI y controladores.',
                    luigi:'Luis Tamagnini',
                    bio:'Artista audiovisual y programador. Iniciado a fines de los 90 en la composición de música electrónica y concreta. Su trabajo está profundamente enlazado a procesos y conceptos algorítmicos. A mediados de los 2000 comenzó a investigar con lenguajes de programación y a aplicar técnicas algorítmicas en trabajos de computación musical y computación gráfica, desarrollando una serie de piezas audiovisuales experimentales. Su trabajo está vinculado a un número de conceptos -no solo- computacionales como, generatividad, ruido, máquinas, fractales y procesos algebraicos; y algunos otros meta-estructurales como la modularidad y la hibridación en sistemas complejos (digital-analógico, hombre-máquina, etc) y redes. También está interesado en el \'live-coding\' y la improvisación. Sus obras incluyen composiciones musicales, audiovisuales electrónicos, instalaciones, videoarte y aplicaciones, entre otros. Es docente e investigador en la Universidad Nacional de Rosario - UNR.'
                }
            },
        }
    })