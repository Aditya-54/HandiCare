// Function to handle emergency button click
function handleEmergency() {
    // Display a prompt to the user
    var confirmCall = confirm("Are you sure you want to call the emergency number 8450076426?");
    
    // If the user confirms, initiate the call
    if (confirmCall) {
        window.location.href = "tel:8450076426";
    }
    
    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            // Send latitude and longitude to emergency services (if supported)
            console.log("User's Location - Latitude: " + latitude + ", Longitude: " + longitude);
        }, function(error) {
            // Handle geolocation errors
            console.error("Error getting user's location:", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}
