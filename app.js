const notificationsDropdown = document.getElementById("notifications-dropdown");
const settingsDropdown = document.getElementById("settings-dropdown");
const trialCallout = document.getElementById("trial-callout");
const mobileTrialCallout = document.getElementById("mobile-trial-callout");
const checkBtn = document.getElementById("check-btn");
const circleLoadedGray = document.querySelector(".circle-loaded-gray");
const circleLoaded = document.querySelector(".circle-loaded");
const setupGuideList = document.getElementById("setup-guide-list");
const toggleSetupGuideBtn = document.getElementById("toggle-setup-guide-btn");

function toggleNotificationsDropdown() {
  notificationsDropdown.classList.toggle("open");
}

function toggleSettingsDropdown() {
  settingsDropdown.classList.toggle("open");
}

function removeTrialCallout() {
  trialCallout.classList.remove("show");
}

function removeMobileTrialCallout() {
  mobileTrialCallout.classList.remove("show");
}

function toggleShowSetupGuideList(e) {
  toggleSetupGuideBtn.classList.toggle("show");
  setupGuideList.classList.toggle("show");
}

function toggleCheck(e) {
  if (checkBtn.classList.contains("checked")) {
    checkBtn.classList.remove("checked");
    circleLoaded.style.display = "none";
    return;
  }
  checkBtn.classList.add("checking");
  setTimeout(() => {
    checkBtn.classList.remove("checking");
    checkBtn.classList.add("checked");
    circleLoadedGray.style.display = "block";
    setTimeout(() => {
      circleLoadedGray.style.display = "none";
      circleLoaded.style.display = "block";
    }, 300);
  }, 500);
}
