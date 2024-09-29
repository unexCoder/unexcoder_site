import { Helmet } from 'react-helmet-async';
import dates from '../data/dates';
import { useTranslation } from 'react-i18next';

const Tour = () => {
    const {t,i18n} = useTranslation(); 
    return (
        <div className="content" >
            <Helmet>
                <title>\unexCoder | Tour</title>
                <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
                <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
                <link rel="canonical" href="/" />
                <style type="text/css">{`body {overflow:scroll;overflow-x: hidden; }`}</style>       
                <style type="text/css">{`.content {background-color:#000; }`}</style>       
            </Helmet>

            <div className='tour'>
                <h1 style={{ margin:'5vh',color:'#ff00ff',fontSize:'2em',fontWeight:'bold'}}>{t('tour')}</h1>
                <div>
                    {Object.keys(dates).map((date) => (
                        <p className="tourdates"> {dates[date].date} <a href={dates[date].lnk} style={{textDecoration:'none',color:'#00ff00',opacity:'1.0'}} target='_blank' rel='noreferrer'>@{dates[date].venue}</a> </p>                
                    ))}
                </div> 
            </div>
        </div>
  );
}

export default Tour;