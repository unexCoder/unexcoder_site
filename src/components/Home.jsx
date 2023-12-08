import { Helmet } from 'react-helmet-async';
import { Link} from 'react-router-dom'
import { FaBandcamp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import useWindowSize from '../hooks/use-window-size';

const Home = () => {
    const {t,i18n} = useTranslation(); 

    const size = useWindowSize();
    const iconSize =  size.width < size.height ? 40 : 30;

  return (
    <div className='content'>
        <Helmet>
            <title>\unexCoder</title>
            <meta
             name="description"
             content="'The official \unexCoder source code repo and web app.'"
             />
            <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
            <link rel="canonical" href="/" />
        </Helmet>

        <div>
            <h1><Link to='/' style={{textDecoration:'none',color:'#00ff00',fontSize:'1.5em'}}>\unexCoder</Link></h1>
            <p style={{margin:'2vh 0', padding:'2vw', color:'#ff00ff',textAlign:'left'}}>{t('about')}</p>
        </div>    

        <div style={{padding:'2vw',textAlign:'right'}}>
            {Object.keys(lngs).map((lng) => (
                <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
            ))}
        </div>

        <div className='navigate'>             
            <h2> <Link to='/gallery' style={{textDecoration:'none',color:'#f0f'}}>{t('gallery')}</Link></h2>
            <h2> <Link to='/tour' style={{textDecoration:'none',color:'#f0f'}}>{t('tour')}</Link></h2>
        </div>        

        <div className='social'>
            <a href="https://unexcoder.bandcamp.com" target="_blank" className='socialLink' rel="noreferrer"><FaBandcamp size={iconSize}/></a>
            <a href="https://www.youtube.com/@unexcoder" target="_blank" className='socialLink' rel="noreferrer"><FaYoutube size={iconSize}/></a>
            <a href="https://www.instagram.com/unexcoder/" target="_blank" className='socialLink' rel="noreferrer">< FaInstagram size={iconSize}/></a>
            <a href="https://twitter.com/unexCoder" target="_blank" className='socialLink' rel="noreferrer"><FaTwitter size={iconSize}/></a>
            <a href="https://www.facebook.com/unexCoder" target="_blank" className='socialLink' rel="noreferrer"><FaFacebook size={iconSize}/></a>
        </div>
    </div>
  );
}

export default Home;
