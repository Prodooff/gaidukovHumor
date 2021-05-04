function ShowDefaultAnecdote() {
    let defaultAnecdoteBlock = document.getElementById("defaultAnecdoteText")
    let state = defaultAnecdoteBlock.style.display

    let cockBlock = document.getElementById("cockText")
    let cockBlockStyle = cockBlock.style.display // For 18+ anecdots 
    if (cockBlockStyle == 'flex') cockBlock.style.display = 'none';

    let memeBlock = document.getElementById("memeBlock")
    let memeBlockStyle = memeBlock.style.display // For meme block
    if (memeBlockStyle == 'flex') memeBlock.style.display = 'none';

    let videoBlock = document.getElementById("videoBlock")
    let videoBlockStyle = videoBlock.style.display //For video block
    if (videoBlockStyle == 'flex') videoBlock.style.display = 'none'

    let smisolBlock = document.getElementById("smisolBlock")
    let smisolBlockStyle = smisolBlock.style.display //For smisol block
    if (smisolBlockStyle == 'flex') smisolBlock.style.display = 'none'

    if (state == 'flex') defaultAnecdoteBlock.style.display = 'none';
    else defaultAnecdoteBlock.style.display = 'flex';


}