import '../styles/hypercubx.css'

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import gif00 from '../data/gif/_h_g_00.gif'
import gif01 from '../data/gif/_h_g_01.gif'
import gif02 from '../data/gif/_h_g_02.gif'
import gif03 from '../data/gif/_h_g_03.gif'
import gif04 from '../data/gif/_h_g_04.gif'
import gif05 from '../data/gif/_h_g_05.gif'
import gif06 from '../data/gif/_h_g_06.gif'
import gif07 from '../data/gif/_h_g_07.gif'
import gif08 from '../data/gif/_h_g_08.gif'
import gif09 from '../data/gif/_h_g_09.gif'
import gif10 from '../data/gif/_h_g_10.gif'
import gif11 from '../data/gif/_h_g_11.gif'
import gif12 from '../data/gif/_h_g_12.gif'
import gif13 from '../data/gif/_h_g_13.gif'


const Hypercubx = () => {
    // eslint-disable-next-line
    const {t,i18n} = useTranslation();
    return (
        <div className="container" >
            <Helmet>
                <title>_hypercubx</title>
                <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
                <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
                <link rel="canonical" href="/" />              
            </Helmet>

            <a href="https://www.youtube.com/@unexcoder" target="_blank" rel="noreferrer">                   
                <div className="container">            
                    <div className="gifcontainer">
                        <div><img src={gif01} alt="hypercube" /></div>
                        <div><img src={gif04} alt="hypercube" /></div>
                        <div><img src={gif06} alt="hypercube" /></div>
                        <div><img src={gif02} alt="hypercube" /></div>
                        <div><img src={gif03} alt="hypercube" /></div>
                        <div><img src={gif09} alt="hypercube" /></div>
                        <div><img src={gif10} alt="hypercube" /></div>
                        <div><img src={gif11} alt="hypercube" /></div>
                        <div><img src={gif05} alt="hypercube" /></div>
                        <div><img src={gif08} alt="hypercube" /></div>
                        <div><img src={gif07} alt="hypercube" /></div>
                        <div><img src={gif12} alt="hypercube" /></div>
                        <div><img src={gif13} alt="hypercube" /></div>
                        <div><img src={gif00} alt="hypercube" /></div>
                        <div><img src={gif02} alt="hypercube" /></div>
                        <div><img src={gif04} alt="hypercube" /></div>
                        <div><img src={gif06} alt="hypercube" /></div>
                        <div><img src={gif05} alt="hypercube" /></div>
                        <div><img src={gif01} alt="hypercube" /></div>
                        <div><img src={gif03} alt="hypercube" /></div>
                    </div>
                
                    <div className="containertxt">
                        <div className="txt">
                            <h1>_hy</h1>
                            <h1>per</h1>
                            <h1>cu</h1>
                            <h1>bx</h1>
                        </div>
                        <p className="hyper">{t('hyper')}</p>
                    </div>
                </div>    
            </a>
        </div>
  );
}

export default Hypercubx;