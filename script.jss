function changeName() {
    let newName = prompt("Enter your new name:");
    if (newName) {
        document.getElementById("name").textContent = newName;
    }
}