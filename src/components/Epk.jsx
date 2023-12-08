import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import { FaBandcamp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import { Carousel } from 'react-bootstrap';
import gallery from '../data/media';


const Epk = () => {
  
  const {t,i18n} = useTranslation(); 

  return (
    <div>
        <Helmet>
            <title>\unexCoder Press Kit</title>
            <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
            <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
            <link rel="canonical" href="/" />
            <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"/>
            <style type="text/css">{`body {overflow:scroll;overflow-x: hidden;}`}</style>
        </Helmet>
        
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <p style={{color:'#fff',textAlign:'left',margin:'0',padding:'0'}}>E-Press Kit</p>
          <div style={{}}>
                {Object.keys(lngs).map((lng) => (
                    <button style={{color:'#fff',fontSize:'1em'}} className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
                ))}
            </div>  
        </div>
        <div className='presskit'>
          <div className='kitleft'>
            <div className='innerkit'>
              <h1>Bio</h1>
              <p style={{textAlign:'left',fontSize:'1.25em'}}>{t('about')}</p>
            </div>
          <div className='innerkit'>
              <h1>{t('discography')}</h1>
              <div style={{display:'flex',justifyContent:'center'}}>
                 <iframe style={{border:'0',width:'150px',height:'150px',padding:'10px'}} src="https://bandcamp.com/EmbeddedPlayer/album=961830835/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=false/" seamless title='\unexCoder (2017)'><a href="https://unexcoder.bandcamp.com/album/unexcoder">\unexCoder by \unexCoder</a></iframe>
                 <iframe style={{border:'0',width:'150px',height:'150px',padding:'10px'}} src="https://bandcamp.com/EmbeddedPlayer/album=205069946/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=false/" seamless title='rem (2019)'><a href="https://unexcoder.bandcamp.com/album/rem">rem by \unexCoder</a></iframe>
              </div>
          </div>
          <div className='innerkit'>
              <h1>{t('gallery')}</h1>
              <div style={{display:'flex',justifyContent:'center',padding:'10px'}}>
                <Carousel className="w-75" indicators={false}>
                    {Object.keys(gallery).map((pic) => (
                        <Carousel.Item >
                          <img className="w-100"
                                src= { gallery[pic].src}
                                alt="\unexCoder - _hypercubx Live A/v (2023)" />
                        </Carousel.Item>                
                    ))}
                </Carousel>
                {/* <p id='caption'>_hypercubx a/v (2023)</p> */}
            </div>
          </div>

            <div className='innerkit'>
              <h1>{t('network')}</h1>
              <div style={{fontSize:'2em',display:'flex',justifyContent:'center'}}>
                  <a href="https://unexcoder.bandcamp.com" target="_blank" className='socialLinkepk' rel="noreferrer"><FaBandcamp size={30} /></a>
                  <a href="https://www.youtube.com/@unexcoder" target="_blank" className='socialLinkepk' rel="noreferrer"><FaYoutube size={30}/></a>
                  <a href="https://www.instagram.com/unexcoder/" target="_blank" className='socialLinkepk' rel="noreferrer">< FaInstagram size={30}/></a>
                  <a href="https://twitter.com/unexCoder" target="_blank" className='socialLinkepk' rel="noreferrer"><FaTwitter size={30}/></a>
                  <a href="https://www.facebook.com/unexCoder" target="_blank" className='socialLinkepk' rel="noreferrer"><FaFacebook size={30}/></a>
              </div>
            </div>
          </div>
          <div className='kitright'>
            <div className='innerkit'>
              <h1>_hypercubx A/V</h1>
              <p style={{textAlign:'left',fontSize:'1.25em'}}>{t('hyper')}</p>
              <div style={{color:'#fff',padding:'2vh'}}>
                <iframe className='videoframe'  src="https://www.youtube.com/embed/TmbGAhIF0tE" title="\unexCoder Youtube Channel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>_hypercubx A/V (2023)</p>      
              </div>
            </div>
            <div className='innerkit'>
              <h1>{t('rider')}</h1>
              <div style={{textAlign:'left'}}>
                <h4>{t('sound')}</h4>
                <p style={{fontSize:'1.25em'}}>{t('snd')}</p>
                <h4>{t('video')}</h4>
                <p style={{fontSize:'1.25em'}}>{t('scrn')}</p>
                <h4>{t('stage')}</h4>
                <p style={{fontSize:'1.25em'}}>{t('stg')}</p>
              </div>
            </div>
          </div>          
        </div>
        
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{padding:'1vh',color:'#fff',fontSize:'2em'}}>
              <a href="mailto:bosca.music@gmail.com" target="_blank" className='socialLinkepk' rel="noreferrer"><AiOutlineMail /></a><span><a style={{textDecoration:'none',fontSize:'0.5em',color:'#fff'}} href="mailto:bosca.music@gmail.com">bosca.music@gmail.com</a></span>
          </div>         
          <div style={{padding:'2vh'}}>
              {Object.keys(lngs).map((lng) => (
                  <button style={{color:'#fff',fontSize:'1.25em'}} className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
              ))}
          </div>         
        </div>
    </div>
  );
}

export default Epk;