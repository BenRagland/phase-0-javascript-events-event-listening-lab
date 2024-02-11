function addingEventListener() {
    const button = document.getElementById("button")
    button.addEventListener('click', alertMessage)   
}

function alertMessage(){
    alert("I've Been Clicked!")
}