import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
    const pics = [
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
        {src: 'https://imgs.search.brave.com/lGwtK-HzlPJR1GsNTGRjhj84ithp80mvh0XcygkB4Lw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91aGR3/YWxscGFwZXJzLm9y/Zy91cGxvYWRzL2Nv/bnZlcnRlZC8xOC8x/MC8xNC9jaXR5LWxp/Z2h0cy1ieS1hc3Vz/LXJvZy13YWxscGFw/ZXItMjU2MHgxNDQw/XzU1NzQ0LW1tLTkw/LmpwZw'},
    ];

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
                    {Object.keys(pics).map((pic) => (
                            <Carousel.Item >
                                <img className="d-block w-100"
                                src= { pics[pic].src}
                                alt="First slide" />
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
