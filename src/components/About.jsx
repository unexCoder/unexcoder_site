import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link} from 'react-router-dom'
import { FaBandcamp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const About = () => {

  return (
    <div className='content'>
        <Helmet>
            <title>\unexCoder</title>
            <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
            <link rel="canonical" href="/" />
        </Helmet>

        <h1><Link to='/' style={{textDecoration:'none',color:'green',fontSize:'1.5em'}}>\unexCoder</Link></h1>
        <h1 style={{padding:'2vw', color:'#ff00ff',textAlign:'left'}}>\unexCoder
        es un proyecto de música electrónica con base en Rosario, ARGENTINA. 
        \unexCoder explora variadas estéticas del género como IDM, Techno, Ambient,
        Pop, House y Noise entre otras. La poética del código está en el 
        sustrato conceptual del proyecto y se manifiesta en performances audiovisuales 
        que incluyen imágenes generativas que acompañan los sonidos en una danza de 
        abstracción y sinestecia</h1>
        <div className='social'>
            <Link to='/' className='socialLink'>< FaBandcamp /></Link>
            <Link to='/' className='socialLink'>< FaYoutube /></Link>
            <Link to='/' className='socialLink'>< FaInstagram /></Link>
            <Link to='/' className='socialLink'>< FaTwitter /></Link>
            <Link to='/' className='socialLink'>< FaFacebook /></Link>
        </div>
    </div>
  );
}

export default About;
