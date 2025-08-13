// main.js
import { createProfileCard } from "./cardModule.js";

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-profile-btn");
  const container = document.getElementById("card-container");

  addBtn.addEventListener("click", () => {
    const name = prompt("Enter name:");
    if (!name) return alert("Name is required.");

    const role = prompt("Enter role:");
    if (!role) return alert("Role is required.");

    const card = createProfileCard(name, role, (cardEl) => {
      container.removeChild(cardEl);
    });

    container.appendChild(card);
  });
});
