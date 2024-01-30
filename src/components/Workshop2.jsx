import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import {AiOutlineMail} from 'react-icons/ai';
import gallery from '../data/media';

import '../styles/workshop.css'


const Workshop = () => {
  
  const {t,i18n} = useTranslation(); 

  return (
    <div>
        <Helmet>
            <title>Supercollider Workshop</title>
            <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
            <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
            <link rel="canonical" href="/" />
            <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"/>
            <style type="text/css">{`body {overflow:scroll;overflow-x: hidden;}`}</style>
        </Helmet>
        
        <div className='workshopContainer'>
          <div className='header'>
              <div style={{}}>
                    {Object.keys(lngs).map((lng) => (
                        <button style={{color:'#fff',fontSize:'1em'}} className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
                    ))}
              </div>  
          </div>
          <div className='wshopBody'>
            <div className="imageCont">
              <img src= { gallery[10].src} alt="Supercollider Workshop" />
            </div>
            <h6 style={{paddingTop:'5px'}} >{t('workshop').toUpperCase()}</h6>
            <h1>{t('wshopTitle2')}</h1>
            <p style={{lineHeight:'24px'}} >{t('wshopAbout2')}</p>
            <h4>{t('summary')}</h4>
            <ul>
              <li>{t('sum_3')}</li>
              <li>{t('sum_4')}</li>
              <li>{t('sum_5')}</li>
              <li>{t('sum_62')}</li>
              <li>{t('sum_9')}</li>
              <li>{t('sum_12')}</li>
              <li>{t('sum_7')}</li>
              <li>{t('sum_11')}</li>
              <li>{t('sum_8')}</li>
              <li>{t('sum_10')}</li>
            </ul>
            <h5 style={{fontSize:'1em'}}>{t('luigi').toUpperCase()}</h5>
            <p style={{fontSize:'1em',lineHeight:'20px'}}>{t('bio')}</p>
           <a href="mailto:bosca.music@gmail.com" target="_blank" className='socialLinkepk' rel="noreferrer"><AiOutlineMail /></a><span><a style={{textDecoration:'none',fontSize:'1em',color:'#fff'}} href="mailto:bosca.music@gmail.com">bosca.music@gmail.com</a></span>
          </div>
        </div>
    </div>
  );
}

export default Workshop;