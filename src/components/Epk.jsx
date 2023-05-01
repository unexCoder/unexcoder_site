import { Helmet } from 'react-helmet-async';
import { Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';

const Epk = () => {
  
  const {t,i18n} = useTranslation(); 

  return (
    <div className='content'>
        <Helmet>
            <title>\unexCoder</title>
            <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
            <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
            <link rel="canonical" href="/" />
        </Helmet>

        <div style={{padding:'2vw',textAlign:'right'}}>
            {Object.keys(lngs).map((lng) => (
                <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
            ))}
        </div>         
    </div>
  );
}

export default Epk;