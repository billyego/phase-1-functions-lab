// index.js

// Function to calculate the distance from the headquarters in blocks
function distanceFromHqInBlocks(location) {
    const hq = 42; // Headquarters location
    return Math.abs(location - hq); // Absolute difference between location and headquarters
}

// Function to calculate the distance from the headquarters in feet
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264; // Each block is 264 feet
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Each block is 264 feet
}

// Function to calculate the fare price based on the distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;

    if (distance <= 400) {
        fare = 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25; // $25 for distances over 2000 feet
    } else {
        fare = 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }

    return fare;
}

// Exporting functions for testing
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
