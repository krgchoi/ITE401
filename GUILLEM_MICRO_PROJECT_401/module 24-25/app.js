// Initialize the map
const map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// DOM elements
const locationInput = document.getElementById("locationInput");
const addLocationButton = document.getElementById("addLocationButton");

// Event listener for the search button
addLocationButton.addEventListener("click", async () => {
  const location = locationInput.value.trim();
  if (location !== "") {
    try {
      // Fetch location data using Nominatim API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          location
        )}&format=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];

        // Center map on the location and add a marker
        const coordinates = [parseFloat(lat), parseFloat(lon)];
        map.setView(coordinates, 13);
        L.marker(coordinates).addTo(map).bindPopup(display_name).openPopup();

        // Clear the input field
        locationInput.value = "";
      } else {
        alert("Location not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      alert(
        "An error occurred while fetching the location. Please try again later."
      );
    }
  }
});
