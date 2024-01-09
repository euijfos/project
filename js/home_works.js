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

const moveBlock = () => {
    if (positionX < 449){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 10)
    }
}
moveBlock()