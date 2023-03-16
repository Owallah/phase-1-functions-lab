// Code your solution in this file!

let value;

function distanceFromHqInBlocks(someValue) {

    if (someValue > 42) {
        return someValue - 42;
    }
    else{
        return 42 - someValue;
    }

    
}

function distanceFromHqInFeet(someValue) {
    let distInBlocks = distanceFromHqInBlocks(someValue)
    return distInBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    let startFeet = distanceFromHqInFeet(start);
    let destFeet = distanceFromHqInFeet(destination);

    return (destFeet - startFeet);
}

function calculatesFarePrice(start, destination) {
    const distTravelledInFeet = distanceTravelledInFeet(start, destination);

    if (distTravelledInFeet >= 0 && distTravelledInFeet <= 400) {
        return 0;
    }

    else if (distTravelledInFeet > 400 && distTravelledInFeet <= 2000) {
        return ((distTravelledInFeet - 400) * 0.02)
    }

    else if (distTravelledInFeet > 2000 && distTravelledInFeet <= 2500) {
        return 25;
    }

    else if (distTravelledInFeet > 2500) {
        return 'cannot travel that far';
    }
}

// calculatesFarePrice(43,44);
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));