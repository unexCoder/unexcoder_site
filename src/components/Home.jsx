import { Helmet } from 'react-helmet-async';
import { Link} from 'react-router-dom'
import { FaBandcamp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';

const Home = () => {
    const {t,i18n} = useTranslation(); 

  return (
    <div className='content'>
        <Helmet>
            <title>\unexCoder</title>
            <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
            <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
            <link rel="canonical" href="/" />
        </Helmet>

        <h1><Link to='/' style={{textDecoration:'none',color:'green',fontSize:'1.5em'}}>\unexCoder</Link></h1>
        <p style={{margin:'2vh 0', padding:'2vw', color:'#ff00ff',textAlign:'left', fontSize:'2em', fontWeight:'bold'}}>{t('about')}</p>

        <div style={{padding:'2vw',textAlign:'right'}}>
            {Object.keys(lngs).map((lng) => (
                <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
            ))}
        </div>

        <div className='navigate'>             
            <h2> <Link to='/gallery' style={{fontSize:'1.35em', textDecoration:'none',color:'#f0f'}}>{t('gallerie')}</Link></h2>
            <h2> <Link to='/' style={{fontSize:'1.35em',textDecoration:'none',color:'#f0f'}}>{t('tour')}</Link></h2>
        </div>        

        <div className='social'>
            <a href="https://unexcoder.bandcamp.com" target="_blank" className='socialLink'><FaBandcamp /></a>
            <a href="https://www.youtube.com/@unexcoder" target="_blank" className='socialLink'><FaYoutube /></a>
            <a href="https://www.instagram.com/unexcoder/" target="_blank" className='socialLink'>< FaInstagram /></a>
            <a href="https://twitter.com/unexCoder" target="_blank" className='socialLink'><FaTwitter /></a>
            <a href="https://www.facebook.com/unexCoder" target="_blank" className='socialLink'><FaFacebook /></a>
        </div>
    </div>
  );
}

export default Home;
