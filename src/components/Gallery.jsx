import { Helmet } from 'react-helmet-async';
import { Carousel } from 'react-bootstrap';
import gallery from '../data/media';

const Gallery = () => {
    
    return (
        <div>
            <Helmet>
                <title>\unexCoder</title>
                <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
                <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
                <link rel="canonical" href="/" />
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"/>
            </Helmet>
        
            <div>
                <Carousel>
                    {Object.keys(gallery).map((pic) => (
                            <Carousel.Item >
                                <img className="d-block w-100"
                                src= { gallery[pic].src}
                                alt="\unexCoder - _hypercubx Live A/v (2023)" />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>                
                    ))}
                </Carousel>
                <p id='caption'>_hypercubx a/v (2023)</p>
            </div>
        </div>
  );
}

export default Gallery;
