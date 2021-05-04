function showMeme() {
    let memeBlock = document.getElementById("memeBlock")
    let state = memeBlock.style.display

    let defaultAnecdoteBlock = document.getElementById("defaultAnecdoteText")
    let defaultAnecdoteBlockStyle = defaultAnecdoteBlock.style.display //For default anecdots
    if (defaultAnecdoteBlockStyle == 'flex') defaultAnecdoteBlock.style.display = 'none';

    let cockBlock = document.getElementById("cockText")
    let cockBlockStyle = cockBlock.style.display //For 18+ block
    if (cockBlockStyle == 'flex') cockBlock.style.display = 'none';

    let videoBlock = document.getElementById("videoBlock")
    let videoBlockStyle = videoBlock.style.display //For video block
    if (videoBlockStyle == 'flex') videoBlock.style.display = 'none'

    let smisolBlock = document.getElementById("smisolBlock")
    let smisolBlockStyle = smisolBlock.style.display //For smisol block
    if (smisolBlockStyle == 'flex') smisolBlock.style.display = 'none'

    if (state == 'flex') memeBlock.style.display = 'none';
    else memeBlock.style.display = 'flex';


}