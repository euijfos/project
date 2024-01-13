//gmail

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const email_regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

function onInput() {
    if (isEmailValid(gmailInput.value)) {
        gmailInput.style.color = 'green';
        gmailResult.innerHTML = 'OK'
    } else {
        gmailInput.style.color = 'red';
        gmailResult.innerHTML = 'NOT OK'
    }
}

gmailInput.addEventListener('input', onInput);
function isEmailValid(value) {
    return email_regExp.test(value)
}

//move block

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < 449  && positionY==0){

        positionX++
        childBlock.style.left = `${positionX}px`

        setTimeout(moveBlock, 10)
    } else if (positionX == 449 && positionY < 449) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 10)
    }else if (positionX > 0 && positionY == 449) {

        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 10)
    }else if (positionX == 0 && positionY >= 0) {
        console.log("fff")
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 10)}

}
moveBlock()


const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let counter = 0
let vyluch = true
const second = document.querySelector("#seconds")
const start1=()=>{
    let dfdf = setInterval(()=>{
        counter++
        second.innerHTML = counter
    },1000)

    stop.onclick=()=>{
        clearInterval(dfdf)
        vyluch=true
    }
    reset.onclick=()=>{
        clearInterval(dfdf)
        vyluch=true
        counter=0
        second.innerHTML=0
    }
}


start.onclick=()=>{
    if(vyluch==true){
        start1()
        vyluch=false
    }
}





