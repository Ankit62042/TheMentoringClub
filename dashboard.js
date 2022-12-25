// Get the menu elements
const menuItems = document.querySelectorAll(".menu li");

// Add a click event listener to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Remove the active class from all menu items
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add the active class to the clicked menu item
    event.target.classList.add("active");

    // Load the content for the selected menu item
    loadContent(event.target.textContent);
  });
});

function loadContent(menuItem) {
  // Fetch the content for the selected menu item
  fetch(`/${menuItem.toLowerCase()}.html`)
    .then((response) => response.text())
    .then((content) => {
      // Update the content div with the new content
      document.querySelector(".content").innerHTML = content;
    });
}
