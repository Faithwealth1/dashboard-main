// Getting Initials

document.addEventListener("DOMContentLoaded", function () {
    const fullName = "John Doe"; 
    const nameArray = fullName.split(" ");
    let initials = "";
    nameArray.forEach((word) => {
      if (word[0]) initials += word[0];
    });
  
    document.getElementById("initials-circle").innerText = initials.toUpperCase();
  });

//   For the select option
  
  function selectCard(card) {
    // Remove 'active' class from all cards
    const allCards = document.querySelectorAll('.metric-card');
    allCards.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the selected card
    card.classList.add('active');
}

// Action Coloumn
      document.addEventListener("DOMContentLoaded", () => {
        const tableBody = document.querySelector("tbody");
      
        tableBody.addEventListener("click", (event) => {
        
          if (event.target.classList.contains("action-icon")) {
            const parentRow = event.target.closest("tr");
            const actionButtons = parentRow.querySelector(".action-buttons")
            actionButtons.classList.toggle("hidden");
          }
        });
      });
      