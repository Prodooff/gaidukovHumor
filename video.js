function showVideo() {
    let videoBlock = document.getElementById("videoBlock")
    let state = videoBlock.style.display

    let defaultAnecdoteBlock = document.getElementById("defaultAnecdoteText")
    let defaultAnecdoteBlockStyle = defaultAnecdoteBlock.style.display //For default anecdots
    if (defaultAnecdoteBlockStyle == 'flex') defaultAnecdoteBlock.style.display = 'none';

    let cockBlock = document.getElementById("cockText")
    let cockBlockStyle = cockBlock.style.display //For 18+ block
    if (cockBlockStyle == 'flex') cockBlock.style.display = 'none';

    let memeBlock = document.getElementById("memeBlock")
    let memeBlockStyle = memeBlock.style.display //For meme block
    if (memeBlockStyle == 'flex') memeBlock.style.display = 'none'

    let smisolBlock = document.getElementById("smisolBlock")
    let smisolBlockStyle = smisolBlock.style.display //For smisol block
    if (smisolBlockStyle == 'flex') smisolBlock.style.display = 'none'

    if (state == 'flex') videoBlock.style.display = 'none';
    else videoBlock.style.display = 'flex';


}