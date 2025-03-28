// Sample friend data
const friendsData = [
  { name: "I" },
  { name: "Am" },
  { name: "Lonely :(" },
  // Add more friends here...
];

// Function to populate the friend list
function populateFriendList() {
  const friendList = document.getElementById("friend-list");
  friendsData.forEach((friend) => {
    const listItem = document.createElement("li");
    listItem.textContent = friend.name;
    friendList.appendChild(listItem);
  });
}

// Function to update weather information
function updateWeatherInfo() {
  // Replace with your weather API integration code here
  // For simplicity, we'll just set some sample values
  document.getElementById("weather").textContent = "Cloudy";
  document.getElementById("temperature").textContent = 25;
  document.getElementById("wind-speed").textContent = "7";
}

// Call functions to populate friend list and update weather information
populateFriendList();
updateWeatherInfo();
