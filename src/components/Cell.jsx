import { mouseHoverDesktop, staticCharCell, randomChar } from '../helpers/functions'
import { useEffect, useCallback } from 'react';
import useEventListener from '../hooks/use-event-listener';
import useWindowSize from '../hooks/use-window-size';
import { Helmet } from 'react-helmet-async';

const Cell = () => {

    const size = useWindowSize();
    const cellW = 40;
    const numCells = Math.round((size.width/cellW)*(size.height/cellW));
    const orientation = size.width > size.height ? true : false;
    const linkPos = orientation ? [0.14,0.28,0.41] : [0.135,0.45,0.72];
    const url = 'https://www.youtube.com/channel/UCidbtHxEKHMfORrq9c-O6Cw';
    useEffect(() => {
        if(numCells > 0) {
            staticCharCell(Math.floor(numCells*linkPos[0]),'\\unexCoder',url); 
            staticCharCell(Math.floor(numCells*linkPos[1]),'albums_',url); 
            staticCharCell(Math.floor(numCells*linkPos[2]),'*visuals',url); 
        }
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
                <link rel="canonical" href="/" />
            </Helmet>
            <h1 className='hidden'>\unexCoder Art Web App</h1>
            {[...Array(numCells)].map((x, i) =>
                <p id={'id'+i} key={i} className="cell" onMouseMove={(e) => mouseHoverDesktop(e)}>\</p>
            )}
        </div>
      );
}
 
export default Cell;