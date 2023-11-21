const notificationsDropdown = document.getElementById("notifications-dropdown");
const settingsDropdown = document.getElementById("settings-dropdown");
const trialCallout = document.getElementById("trial-callout");
const mobileTrialCallout = document.getElementById("mobile-trial-callout");
const setupGuideList = document.getElementById("setup-guide-list");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const setupGuideListItems = document.querySelectorAll(".setup-guide-list li");
const toggleSetupGuideBtn = document.getElementById("toggle-setup-guide-btn");

let checkedItems = [];

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

function toggleShowSetupGuideList() {
  toggleSetupGuideBtn.classList.toggle("show");
  setupGuideList.classList.toggle("show");
}

function toggleCheck(checkBtn) {
  const circleLoadedGray = checkBtn.querySelector(".circle-loaded-gray");
  const circleLoaded = checkBtn.querySelector(".circle-loaded");
  if (checkBtn.classList.contains("checked")) {
    checkBtn.title = "Check " + checkBtn.title.split(" ").slice(1).join(" ");
    checkBtn.classList.remove("checked");
    circleLoaded.style.display = "none";
    checkedItems = checkedItems.filter(
      (item) => item !== checkBtn.parentElement.parentElement
    );
    updateProgressBar();
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
      checkedItems.push(checkBtn.parentElement.parentElement);
      updateProgressBar();
      openSetupGuideListItems(
        checkBtn.parentElement.parentElement.nextElementSibling
      );
    }, 300);
  }, 500);
}

function openSetupGuideListItem(listItem) {
  if (!listItem || listItem.classList.contains("open")) return;
  if (listItem.previousElementSibling) {
    const prevCheckBtn =
      listItem.previousElementSibling.querySelector(".check-btn");
    prevCheckBtn.title =
      "Uncheck " + prevCheckBtn.title.split(" ").slice(1).join(" ");
  }
  const listCheckBtn = listItem.querySelector(".check-btn");
  listCheckBtn.focus();
  setupGuideListItems.forEach((item) => item.classList.remove("open"));
  e.classList.add("open");
}

function updateProgressBar() {
  progressText.innerText = `${checkedItems.length}/5 completed`;
  progressBar.style.width = `${(checkedItems.length / 5) * 100}%`;
}
