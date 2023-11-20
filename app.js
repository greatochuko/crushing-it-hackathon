const notificationsDropdown = document.getElementById("notifications-dropdown");
const settingsDropdown = document.getElementById("settings-dropdown");
const trialCallout = document.getElementById("trial-callout");

function toggleNotificationsDropdown() {
  notificationsDropdown.classList.toggle("open");
}

function toggleSettingsDropdown() {
  settingsDropdown.classList.toggle("open");
}

function removeTrialCallout() {
  trialCallout.classList.remove("show");
}
