// Select elements
const output = document.getElementById('output');
const mapDiv = document.getElementById('map');
const getLocationBtn = document.getElementById('getLocation');

// Google Maps API Key (Replace with your key if using Google Maps)
const GOOGLE_MAPS_API_KEY = 'AIzaSyC_C9ING3B6KFDr2hTZn9yCoIbRR0npCUw';

// Function to initialize the map
function initializeMap(latitude, longitude) {
    // Embed Google Maps with the user's location
    const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${latitude},${longitude}&zoom=15&maptype=satellite`;
    mapDiv.innerHTML = `<iframe width="100%" height="100%" frameborder="0" style="border:0" src="${mapUrl}" allowfullscreen></iframe>`;
}



// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        output.textContent = 'Getting your location...';
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                output.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
                initializeMap(latitude, longitude);
            },
            (error) => {
                output.textContent = `Error: ${error.message}`;
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        );
    } else {
        output.textContent = 'Geolocation is not supported by your browser.';
    }
}

// Attach event listener to the button
getLocationBtn.addEventListener('click', getLocation);