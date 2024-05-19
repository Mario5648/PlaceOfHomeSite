function addQuestion() {
    const questionsContainer = document.getElementById("questionsContainer");
    const newQuestion = document.createElement("div");
    newQuestion.classList.add("questionFieldSection");
    newQuestion.innerHTML = `
        <input class="questionfield" type="text" name="questions[]" placeholder="Enter your question" required>
        <button onclick="removeQuestion(this)" class="deleteButton"><i class="fa fa-close" style="font-size:35px"></i></button>
    `;
    questionsContainer.appendChild(newQuestion);
}

function removeQuestion(btn) {
    btn.parentNode.remove();
}

function toggleDateInput(checkbox, index) {
    const dateInput = document.getElementById('tourDate' + index);
    if (checkbox.checked) {
      dateInput.style.display = 'block';
    } else {
      dateInput.style.display = 'none';
    }
  }

  function updateHousingDetails() {
    const housingType = document.getElementById('housingType').value;
    const budgetLabel = document.getElementById('budgetLabel');
    const bedroomsGroup = document.getElementById('bedroomsGroup');
    const bathroomsGroup = document.getElementById('bathroomsGroup');

    if (housingType === 'Apartment' || housingType === 'Studio') {
      budgetLabel.textContent = 'Apartment Monthly Budget ($):';
    } else {
      budgetLabel.textContent = 'Housing Budget ($):';
    }

    // Hide bedrooms and bathrooms for "Studio"
    if (housingType === 'Studio') {
      bedroomsGroup.classList.add('hidden');
      bathroomsGroup.classList.add('hidden');
    } else {
      bedroomsGroup.classList.remove('hidden');
      bathroomsGroup.classList.remove('hidden');
    }
  }

  function toggleTemporaryFields() {
    const moveTypeSelect = document.getElementById('moveType');
    const temporaryFields = document.getElementById('temporaryFields');
    if (moveTypeSelect.value === 'Temporary') {
      temporaryFields.style.display = 'flex';
    } else {
      temporaryFields.style.display = 'none';
    }
  }