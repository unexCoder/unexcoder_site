const randomChar = () => {
    return String.fromCharCode(Math.random()*(2**7));
}

const staticCharCell = (start,str,url) => {
    [...str].forEach((c,i) => {
        const el = document.getElementById('id'+(start+i));
        el.classList.add('link')
        el.classList.remove('cell')
        el.style.backgroundColor='black';
        el.innerHTML = null;
        const link = document.createElement('a');
        link.style.color='#0f0';
        // link.style.color='#f0f';
        link.setAttribute('href',url);
        link.innerHTML = c;
        el.appendChild(link);
    })
  };

const mouseHoverDesktop = (e) => {
    if(e.target.classList.contains('cell')) {
        e.target.style.backgroundColor='black';
        e.target.style.opacity='0.5';
        e.target.innerHTML=randomChar();
        const n = Math.random();
        if(n > 0.8) {
            e.target.style.opacity='1.0';
            e.target.style.color='green';
        }
    }
}


export { staticCharCell, mouseHoverDesktop, randomChar}