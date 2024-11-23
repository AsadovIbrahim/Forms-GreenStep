const form = document.querySelector("form");

const resultContainer = document.createElement("div");
resultContainer.style.marginTop = "20px";
document.body.appendChild(resultContainer);

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  
  const smokingFrequency = document.querySelector("#smoking-frequency").value || "Təyin edilməyib";
  const exerciseFrequency = document.querySelector("#exercise-frequency").value || "Təyin edilməyib";
  const waterIntake = document.querySelector("#water-intake").value || "Təyin edilməyib";
  const socialEvents = document.querySelector("#social-events").value || "Təyin edilməyib";
  const carUsage = document.querySelector("#car-usage").value || "Təyin edilməyib";
  const planeTrips = document.querySelector("#plane-trips").value || "Təyin edilməyib";
  const socialMediaUsage = document.querySelector("#social-media-usage").value || "Təyin edilməyib";
  
  const resultHTML = `
    <h3>Sizin Cavablarınız</h3>
    <ul>
      <li><strong>Gündə neçə dəfə siqaret çəkirsiniz?</strong>: ${smokingFrequency}</li>
      <li><strong>Həftədə neçə dəfə idman edirsiniz?</strong>: ${exerciseFrequency}</li>
      <li><strong>Gündə neçə litr su içirsiniz?</strong>: ${waterIntake}</li>
      <li><strong>Ayda neçə dəfə ictimai tədbirlərdə iştirak edirsiniz?</strong>: ${socialEvents}</li>
      <li><strong>Həftədə neçə dəfə şəxsi avtomobil istifadə edirsiniz?</strong>: ${carUsage}</li>
      <li><strong>Ayda neçə dəfə təyyarə ilə səyahət edirsiniz?</strong>: ${planeTrips}</li>
      <li><strong>Gündə neçə saat sosial mediadan istifadə edirsiniz?</strong>: ${socialMediaUsage}</li>
    </ul>
  `;

  resultContainer.innerHTML = resultHTML;

  form.reset();
});
