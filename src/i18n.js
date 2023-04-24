import i18next from 'i18next'
import { initReactI18next } from "react-i18next"
import { LanguageDetectorModule } from 'i18next'

i18next
    .use(initReactI18next)
    // .use(LanguageDetectorModule)
    .init({
        fallbackLng:'en',
        resources: {
            en: {
                translation: {
                    gallerie:'Gallery',
                    tour:'Tour',
                    about:'\\unexCoder is a proyect de música electrónica con base en Rosario, ARGENTINA. \\unexCoder explora variadas estéticas del género como IDM, Techno, Ambient, Pop, House y Noise entre otras. La poética del código está en el sustrato conceptual del proyecto y se manifiesta en performances audiovisuales que incluyen imágenes generativas que acompañan los sonidos en una danza de abstracción y sinestecia'
                }
            },
            spa: {
                translation: {
                    gallerie:'Galería',
                    tour:'Fechas',
                    about:'\\unexCoder es un proyecto de música electrónica con base en Rosario, ARGENTINA. \\unexCoder explora variadas estéticas del género como IDM, Techno, Ambient, Pop, House y Noise entre otras. La poética del código está en el sustrato conceptual del proyecto y se manifiesta en performances audiovisuales que incluyen imágenes generativas que acompañan los sonidos en una danza de abstracción y sinestecia'
                }
            },
        }
    })