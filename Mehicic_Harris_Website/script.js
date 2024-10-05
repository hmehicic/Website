const dropdowns = document.querySelectorAll('.dropdown-arrow');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const content = dropdown.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});
    // Prevent page refresh when submitting recommendations
function submitRecommendation(event) {
    event.preventDefault();

    // Retrieve the recommendation text
    const recommendationText = document.getElementById('recommendation-text').value;

    // Save the recommendation to localStorage
    const recommendations = localStorage.getItem('recommendations') ? JSON.parse(localStorage.getItem('recommendations')) : [];
    recommendations.push(recommendationText);
    localStorage.setItem('recommendations', JSON.stringify(recommendations));

    // Display the recommendation on the page
    const recommendationList = document.getElementById('recommendation-list-items');
    const listItem = document.createElement('li');
    listItem.textContent = recommendationText;
    recommendationList.appendChild(listItem);

    // Recommendation Alert
    alert("Thank you for your recommendation: " + recommendationText);

    // Clear the input field
    document.getElementById('recommendation-text').value = '';
}

// Load recommendations from storage
function loadRecommendations() {
    const recommendations = localStorage.getItem('recommendations');
    if (recommendations) {
        const recommendationList = document.getElementById('recommendation-list-items');
        JSON.parse(recommendations).forEach(recommendation => {
            const listItem = document.createElement('li');
            listItem.textContent = recommendation;
            recommendationList.appendChild(listItem);
        });
    }
}

// Function to clear recommendations
function clearRecommendations() {
    // Clear input field
    document.getElementById('recommendation-text').value = '';

    // Clear the displayed recommendations
    const recommendationList = document.getElementById('recommendation-list-items');
    recommendationList.innerHTML = '';

    // Clear recommendations stored in the local storage
    localStorage.removeItem('recommendations');
}

// Call to load recommendations when the page loads
window.onload = loadRecommendations;