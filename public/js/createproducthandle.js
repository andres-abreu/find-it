async function formHandler(event) {
    event.preventDefault();

    alert("Product Created!");
    document.location.replace('/')
    console.log("This msg is coming from the formhandler");
}

document.getElementById("buttonCreate").addEventListener('click', formHandler)