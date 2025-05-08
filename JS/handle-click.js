// Function to handle the click event for sections
function handleClick(sectionId) {
    // Get all the section contents
    const allSections = document.querySelectorAll('.section-content');
    
    // Hide all sections by removing 'active' class
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the clicked section by adding 'active' class to the corresponding content
    const sectionToShow = document.getElementById(sectionId + '-content');
    sectionToShow.classList.add('active');
}
