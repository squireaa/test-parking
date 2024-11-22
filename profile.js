import data from "./profileData.json" with {type: 'json'};

// DOM elements
const profileContent = document.getElementById("profile-content");
const profileEditContent = document.getElementById("profile-edit-content");
const editButton = document.getElementById("profile-edit-id");
const saveButton = document.getElementById("profile-save-id");
const logoutButton = document.querySelector(".profile-logout-button");

// Populate Content
function renderContent(isEditMode = false) {
    const container = isEditMode ? profileEditContent : profileContent;
    container.innerHTML = data.map((item, index) => `
        <div class="profile-data">
            <div class="profile-item">${item.item_text}</div>
            <div class="profile-ans">
                ${isEditMode 
                    ? `<input class="profile-answer-input" id="input-${index}" type="text" value="${item.answer}" />`
                    : `<span>${item.answer}</span>`}
            </div>
        </div>`).join("");
}

// Switch Modes
function toggleMode(isEditMode) {
    profileContent.classList.toggle("profile-edit-hidden", isEditMode);
    profileEditContent.classList.toggle("profile-edit-hidden", !isEditMode);
    editButton.classList.toggle("profile-edit-hidden", isEditMode);
    saveButton.classList.toggle("profile-edit-hidden", !isEditMode);
    logoutButton.classList.toggle("profile-edit-hidden", isEditMode); // Hide Logout button in edit mode

    renderContent(isEditMode); // Render appropriate mode
}

// Save Updated Data
function saveData() {
    document.querySelectorAll(".profile-answer-input").forEach((input, index) => {
        data[index].answer = input.value;
    });
    console.log("Updated Data:", data); // Log or save the updated data
}

// Event Listeners
editButton.addEventListener("click", () => toggleMode(true));
saveButton.addEventListener("click", () => {
    saveData();
    toggleMode(false);
});

// Initial Render in View Mode
renderContent();
