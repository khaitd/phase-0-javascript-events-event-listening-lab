function addingEventListener() {
    let input = document.getElementById('input');
    input.addEventListener('click', testing)
}


function testing() {
    console.log("I was clicked")
}

addingEventListener();
