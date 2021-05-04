function showSmisol() {
    let smisolBlock = document.getElementById("smisolBlock")
    let state = smisolBlock.style.display

    let defaultAnecdoteBlock = document.getElementById("defaultAnecdoteText")
    let defaultAnecdoteBlockStyle = defaultAnecdoteBlock.style.display //For default anecdots
    if (defaultAnecdoteBlockStyle == 'flex') defaultAnecdoteBlock.style.display = 'none';

    let cockBlock = document.getElementById("cockText")
    let cockBlockStyle = cockBlock.style.display //For 18+ block
    if (cockBlockStyle == 'flex') cockBlock.style.display = 'none';

    let memeBlock = document.getElementById("memeBlock")
    let memeBlockStyle = memeBlock.style.display //For meme block
    if (memeBlockStyle == 'flex') memeBlock.style.display = 'none'

    let videoBlock = document.getElementById("videoBlock")
    let videoBlockStyle = videoBlock.style.display //For video block
    if (videoBlockStyle == 'flex') videoBlock.style.display = 'none'

    if (state == 'flex') smisolBlock.style.display = 'none';
    else smisolBlock.style.display = 'flex';


}