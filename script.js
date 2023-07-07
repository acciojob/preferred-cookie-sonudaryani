//your JS code here. If required.
// Retrieve preferences from cookies, if available
const preferences = {
  fontSize: getCookie("fontSize") || "16px",
  fontColor: getCookie("fontColor") || "#000000",
};

// Apply preferences to the page
applyPreferences(preferences);

// Event listener for form submission
document.getElementById("preferencesForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const fontSize = document.getElementById("fontsize").value + "px";
  const fontColor = document.getElementById("fontcolor").value;

  // Update preferences object
  preferences.fontSize = fontSize;
  preferences.fontColor = fontColor;

  // Apply preferences to the page
  applyPreferences(preferences);

  // Store preferences in cookies
  setCookie("fontSize", fontSize, 30); // Expires in 30 days
  setCookie("fontColor", fontColor, 30); // Expires in 30 days
});

// Function to apply preferences to the page
function applyPreferences(preferences) {
  document.body.style.fontSize = preferences.fontSize;
  document.body.style.color = preferences.fontColor;
}

// Function to get cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return "";
}

// Function to set cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}
