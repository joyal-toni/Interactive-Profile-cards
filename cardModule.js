// cardModule.js

/**
 * createProfileCard — creates a card element with name, role, and remove functionality.
 * @param {string} name - User's name
 * @param {string} role - User's role
 * @param {Function} onRemove - callback executed when Remove button is clicked
 * @returns {HTMLElement} - The card element ready to be appended
 */
export function createProfileCard(name, role, onRemove) {
  const card = document.createElement("div");
  card.className = "profile-card";

  const nameEl = document.createElement("h3");
  nameEl.textContent = name;
  card.appendChild(nameEl);

  const roleEl = document.createElement("p");
  roleEl.textContent = role;
  card.appendChild(roleEl);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-button";
  removeBtn.addEventListener("click", () => {
    onRemove(card);
  });
  card.appendChild(removeBtn);

  return card;
}
