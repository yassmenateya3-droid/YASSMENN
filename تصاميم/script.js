function toggleSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection.style.display === 'block') {
        targetSection.style.display = 'none';
    } else {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}