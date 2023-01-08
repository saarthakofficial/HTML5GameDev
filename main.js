const form = document.querySelector("form");
const internships = document.querySelectorAll(".internship");

form.addEventListener("input", (event) => {
  const searchValue = event.target.value.toLowerCase();
  const modeValues = Array.from(form.elements.mode).filter((mode) => mode.checked).map((mode) => mode.value);
  const stipendValue = form.elements.stipend.value;
  const locationValue = form.elements.location.value.toLowerCase();
  internships.forEach((internship) => {
    const internshipBox = internship.querySelector(".internship-box");
    const internshipText = internshipBox.textContent.toLowerCase();
    const internshipMode = internshipBox.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
    const internshipStipend = internshipBox.querySelector("p:nth-of-type(4)").textContent.replace("$", "").replace("/month", "").trim();
    const internshipLocation = internshipBox.querySelector("p:nth-of-type(5)").textContent.toLowerCase();
    if (internshipText.includes(searchValue) &&
        (!modeValues.length || modeValues.includes(internshipMode)) &&
        (stipendValue === "" || stipendValue >= internshipStipend) &&
        (locationValue === "" || internshipLocation.includes(locationValue))) {
      internship.style.display = "block";
    } else {
      internship.style.display = "none";
    }
  });
});