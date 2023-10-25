// main process
let canvasProperties = {
    imageSelected: false
};

const canvas = document.getElementById("field-main");
const ctx = canvas.getContext("2d");

const field = new Field("Field");

let selectedField;
let selectedEntity = undefined;

/**
 * @function render
 * @description Main loop for canvas render
 * @returns {void}
 */

const updateEntities = () => {
    const explorerEntities = document.querySelector("#explorer-entities");
    explorerEntities.innerHTML = "";
    for (var i = 0; i < field.entities.length; i++) {
        explorerEntities.innerHTML += `
            <button class="explorer-entity" id="${field.entities[i].id}">
                ${field.entities[i].constructor.name}
            </button>`;
    }
    
    document.querySelectorAll(".explorer-entity").forEach((ent) => {
        ent.addEventListener("click", (e) => {
            selectedEntity = field.entities[parseInt(e.target.id) - 1];
            console.log(field.entities[parseInt(e.target.id) - 1]);
            console.log(selectedEntity);

            // render PROPERTIES
            const propertiesValues = document.querySelector("#properties-values");
            propertiesValues.innerHTML = "";

            for (let i = 0; i < Object.getOwnPropertyNames(selectedEntity).length; i++) {
                const propertyName = Object.getOwnPropertyNames(selectedEntity)[i];
                propertiesValues.innerHTML += `
                    <div class="property">
                        <h4 class="property-name" >${propertyName}</h4>
                        <input type="text" value="${selectedEntity[propertyName]}" />
                    </div>`;
            }
        });
    });
}

const render = () => {
    if (!canvasProperties.imageSelected) {
        ctx.fillStyle = CanvasBackgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};

// Use requestAnimationFrame for more efficient rendering
(function animate() {
    render();
    requestAnimationFrame(animate);
})();
