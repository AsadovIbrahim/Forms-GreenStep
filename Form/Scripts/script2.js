document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const transport = document.querySelector("#transport").value;
    const electricity = document.querySelector("#electricity").value;
    const food = document.querySelector("#food").value;
    const shopping = document.querySelector("#shopping").value;
    const kitchenAppliances = document.querySelector("#kitchen-appliances").value;
    const plasticUse = document.querySelector("#plastic-use").value;
    const planeTravel = document.querySelector("#plane-travel").value;
    const socialMedia = document.querySelector("#social-media").value;

    const resultHTML = `
        <h3>Sizin Cavablarınız</h3>
        <ul>
            <li><strong>Nəqliyyat:</strong> ${transport}</li>
            <li><strong>Elektrik Enerjisi:</strong> ${electricity}</li>
            <li><strong>Qida:</strong> ${food}</li>
            <li><strong>Alış-Veriş:</strong> ${shopping}</li>
            <li><strong>Mətbəx Cihazları:</strong> ${kitchenAppliances}</li>
            <li><strong>Plastik İstifadəsi:</strong> ${plasticUse}</li>
            <li><strong>Təyyarə Səyahəti:</strong> ${planeTravel}</li>
            <li><strong>Sosial Media İstifadəsi:</strong> ${socialMedia}</li>
        </ul>
    `;

    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = resultHTML;
    document.querySelector(".form-container").appendChild(resultContainer);

    document.querySelector("form").reset();
});
