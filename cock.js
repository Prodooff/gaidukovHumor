function ShowCockAnekdot() {
    let cockBlock = document.getElementById("cockText")
    let state = cockBlock.style.display

    let defaultAnecdoteBlock = document.getElementById("defaultAnecdoteText")
    let defaultAnecdoteBlockStyle = defaultAnecdoteBlock.style.display //For default anecdots
    if (defaultAnecdoteBlockStyle == 'flex') defaultAnecdoteBlock.style.display = 'none';

    let memeBlock = document.getElementById("memeBlock")
    let memeBlockStyle = memeBlock.style.display //For meme block
    if (memeBlockStyle == 'flex') memeBlock.style.display = 'none';

    let videoBlock = document.getElementById("videoBlock")
    let videoBlockStyle = videoBlock.style.display //For video block
    if (videoBlockStyle == 'flex') videoBlock.style.display = 'none'

    let smisolBlock = document.getElementById("smisolBlock")
    let smisolBlockStyle = smisolBlock.style.display //For smisol block
    if (smisolBlockStyle == 'flex') smisolBlock.style.display = 'none'

    if (state == 'flex') cockBlock.style.display = 'none';
    else cockBlock.style.display = 'flex';


}