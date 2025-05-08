// Function to toggle the visibility of a section
function toggleSection(sectionId) {
    const sectionContent = document.getElementById(sectionId);
    const plusSign = sectionContent.previousElementSibling.querySelector('.plus-sign');

    // Toggle the section content visibility
    if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
        sectionContent.style.display = 'block';
        plusSign.textContent = '-'; // Change "+" to "-" when section is shown
    } else {
        sectionContent.style.display = 'none';
        plusSign.textContent = '+'; // Change "-" back to "+" when section is hidden
    }
}
