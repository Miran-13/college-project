// Function to toggle the hamburger menu visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); // This will show/hide the menu on small screens
}

// Function to toggle the dropdown visibility
function toggleDropdown(event) {
    const dropdownContent = event.target.nextElementSibling; // Get the dropdown
    dropdownContent.classList.toggle("show"); // Toggle the dropdown visibility
}

// Close the dropdown when clicking outside of it
window.onclick = function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    
    // Close dropdown if clicked outside of the dropdown or the 'Courses' link
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown *') && !event.target.matches('.burger-icon') && !event.target.matches('.burger-icon *')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show'); // Remove the 'show' class to hide the dropdown
        });
    }
};