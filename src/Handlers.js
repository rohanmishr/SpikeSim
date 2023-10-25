let id = 0;

document.querySelector(".add-btn").addEventListener("click", addEntity);
function addEntity() {
    document.querySelector("#explorer-add").style.display = "flex";
}

document.querySelectorAll(".explorer-add-type").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // get the type that was selected
        let type = e.target.innerHTML;
        if (type == "Robot") {
            field.entities.push(new Robot(++id));
        } else if (type == "Piece") {
            field.entities.push(new Piece(++id));
        }

        updateEntities();
    });
});