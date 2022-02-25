import { mouseHoverDesktop, staticCharCell, randomChar } from '../helpers/functions'
import { useEffect, useCallback } from 'react';
import useEventListener from '../hooks/use-event-listener';
import useWindowSize from '../hooks/use-window-size';

const Cell = () => {

    const size = useWindowSize();
    const cellW = 40;
    const numCells = Math.floor((size.width/cellW)*(size.height/cellW));

    const url = 'https://www.youtube.com/channel/UCidbtHxEKHMfORrq9c-O6Cw';
    useEffect(() => {
        if(numCells > 0) {
            staticCharCell(Math.floor(numCells*0.13),'\\unexCoder',url); 
            staticCharCell(Math.floor(numCells*0.45),'albums_',url); 
            staticCharCell(Math.floor(numCells*0.66),'*visuals',url); 
        }
    },[numCells]);
    
    // Event handler utilizing useCallback
    const hoverMobile = useCallback((e) => {
        const coordX = e.touches[0].pageX;
        const coordY = e.touches[0].pageY;  
        const el = document.elementFromPoint(coordX,coordY);
        if(el.classList.contains('cell-container')) {
            el.style.backgroundColor='black'
            el.style.opacity='0.5';
            el.innerHTML=randomChar();
            const n = Math.random();
            if(n > 0.8) {
                el.style.opacity='1.0';
                el.style.color='green';
            }
        }
    });
    // Add event listener using  hook
    useEventListener('touchmove', hoverMobile);

    return (
        <div className="cell">
            {[...Array(numCells)].map((x, i) =>
                <h1 id={'id'+i} key={i} className="cell-container" onMouseMove={(e) => mouseHoverDesktop(e)}>\</h1>
            )}
        </div>
      );
}
 
export default Cell;