import { mouseHoverDesktop, staticCharCell, randomChar } from '../helpers/functions'
import { useEffect, useCallback } from 'react';
import useEventListener from '../hooks/use-event-listener';
import useMedia from '../hooks/use-media';
import useWindowSize from '../hooks/use-window-size';

const Cell = () => {

    const size = useWindowSize();
    console.log(size);
    
    const mediaContext = useMedia(
        ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],// Media queries
        [[638,72,195,290], [450,90,100,110], [160,22,62,94]],// media contexts
        [160,22,62,94]// Default context
    );

    const url = 'https://www.youtube.com/channel/UCidbtHxEKHMfORrq9c-O6Cw';
    useEffect(() => {
        staticCharCell(mediaContext[1],'\\unexCoder',url); 
        staticCharCell(mediaContext[2],'albums_',url); 
        staticCharCell(mediaContext[3],'*visuals',url); 
    },[]);
    
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
            {[...Array(mediaContext[0])].map((x, i) =>
                <h1 id={'id'+i} key={i} className="cell-container" onMouseMove={(e) => mouseHoverDesktop(e)}>\</h1>
            )}
        </div>
      );
}
 
export default Cell;