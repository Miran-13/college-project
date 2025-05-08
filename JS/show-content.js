function handleClick(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId + '-content');
    sectionToShow.style.display = 'block';
}
