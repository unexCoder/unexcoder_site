import { mouseHoverDesktop, staticCharCell, randomChar } from '../helpers/functions'
import { useEffect, useCallback } from 'react';
import useEventListener from '../hooks/use-event-listener';
import useWindowSize from '../hooks/use-window-size';
import { Helmet } from 'react-helmet-async';

const Cell = (props) => {

    const size = useWindowSize();
    // const cellW = 40;
    const cellW = props.cellW;
    // console.log(size);
    const numCells = Math.round((size.width/cellW)*(size.height/cellW));
    const orientation = size.width > size.height ? true : false;
    const linkPos = orientation ? [0.115,0.285,0.42,0.627] : [0.135,0.39,0.6,0.86];
    const tube = 'https://www.youtube.com/channel/UClEoTMrqLGcBSXn6Jl5KB6A';
    const bandcamp = 'https://unexcoder.bandcamp.com/';
    const github = 'https://github.com/unexCoder';

    // Set random values to each cell an load page
    useEffect(() => {
        if(numCells > 0) {
            // Initialize all cells with random characters
            for(let i = 0; i < numCells; i++) {
                const cell = document.getElementById('id'+i);
                if(cell) {
                    cell.innerHTML = randomChar();
                    // Randomly set some cells to have different styling
                    if(Math.random() > 0.8) {
                        cell.style.opacity = '1.0';
                        cell.style.color = 'green';
                    }
                }
            }
        }
    }, [numCells]); // Only run when numCells changes
    
    // Set static cells with links
    useEffect(() => {
        if(numCells > 0) {
            staticCharCell(Math.floor(numCells*linkPos[0]),'\\unexCoder','/home'); 
            staticCharCell(Math.floor(numCells*linkPos[1]),'albums_',bandcamp);
            // staticCharCell(Math.floor(numCells*linkPos[1]-1),'albums_',bandcamp);
            staticCharCell(Math.floor(numCells*linkPos[2]),'a/visuals','hypercubx'); 
            // staticCharCell(Math.floor(numCells*linkPos[2]-2),'a/visuals','hypercubx'); 
            // staticCharCell(Math.floor(numCells*linkPos[2]+3),'a/visuals','hypercubx'); 
            staticCharCell(Math.floor(numCells*linkPos[3]),'*code',github); 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[numCells]);
    
    // Event handler utilizing useCallback
    const hoverMobile = useCallback((e) => {
        const coordX = e.touches[0].pageX;
        const coordY = e.touches[0].pageY;  
        const el = document.elementFromPoint(coordX,coordY);
        if(el.classList.contains('cell')) {
            el.style.backgroundColor='black'
            el.style.opacity='0.5';
            el.innerHTML=randomChar();
            const n = Math.random();
            if(n > 0.8) {
                el.style.opacity='1.0';
                el.style.color='green';
            }
        }
    },[]);
    // Add event listener using  hook
    useEventListener('touchmove', hoverMobile);

    return (
        <div className="cell-container">
            <Helmet>
                <title>\unexCoder</title>
                <meta  name='description' content='The official \unexCoder source code repo and web app.'/>
                <meta  name='keywords' content='electronic,audiovisual,algorithmic,performance,art,live code,idm,ambient,techno,noise,experimental,\unexCoder,unexcoder,music,generative art,algorithmic art,math art'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <h1 className='hidden'>\unexCoder Art Web App</h1>
            {[...Array(numCells)].map((x, i) =>
                <p id={'id'+i} key={i} className="cell" onMouseMove={(e) => mouseHoverDesktop(e)}></p>
            )}
        </div>
      );
}
 
export default Cell;