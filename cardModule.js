import { createProfileCard } from './profileCard.js';

const addBtn = document.getElementById('addProfileBtn');
const cardContainer = document.getElementById('cardContainer');

addBtn.addEventListener('click', () => {
  const name = prompt("Enter name:");
  const role = prompt("Enter role:");
  if (name && role) {
    const card = createProfileCard(name, role);
    cardContainer.appendChild(card);
  }
});

