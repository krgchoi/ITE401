const locationInput = document.getElementById("locationInput");
const addLocationButton = document.getElementById("addLocationButton");
const locationList = document.getElementById("locationList");
const themeToggle = document.getElementById("themeToggle");

const locations = [];

addLocationButton.addEventListener("click", () => {
  const newLocation = locationInput.value;
  if (newLocation) {
    locations.push(newLocation);
    locationList.innerHTML = ""; // Clear existing list

    for (const location of locations) {
      const listItem = document.createElement("li");
      listItem.textContent = location;
      locationList.appendChild(listItem);
    }

    locationInput.value = ""; // Clear input field
  }
});
