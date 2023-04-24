import i18next from 'i18next'
import { initReactI18next } from "react-i18next"

i18next
    .use(initReactI18next)
    .init({
        fallbackLng:'en',
        resources: {
            en: {
                translation: {
                    gallerie:'Gallery',
                    tour:'Tour',
                    about:'\\unexCoder is a composer and computer artist from Argentina. He use programming languages to develops and builds hybrid performance systems that combine live coded algorithms with analog devices and computer generated graphics. His audiovisual pieces push the viewer into a deep abstract volumetric aural and visual experience.'
                }
            },
            spa: {
                translation: {
                    gallerie:'Galería',
                    tour:'Fechas',
                    about:'\\unexCoder es un compositor y artista informático de Argentina. Utiliza lenguajes de programación para desarrollar y construir sistemas performáticos híbridos que combinan algoritmos y técnicas de "live coding" con dispositivos analógicos y gráficos generados por computadora. Sus piezas audiovisuales empujan al espectador a una profunda experiencia visual y auditiva volumétrica y abstracta.'
                }
            },
        }
    })