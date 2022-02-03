
const distanceFromHqInBlocks = function (pickupLocation) {
    if (pickupLocation > 42) {
        return pickupLocation - 42
    } else {
        return 42 - pickupLocation
    }
}

function distanceFromHqInFeet(pickupLocation) {
    if (pickupLocation > 42) {
        return (pickupLocation - 42)*264
    } else {
        return (42 - pickupLocation)*264
    }
    
  }

function distanceTravelledInFeet(start, destination) {
    if (start > destination)
        return (start - destination)*264;
    else {
        return (destination - start)*264;
    }
  }

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance >= 2500) {
        return "cannot travel that far";
    } else if  (distance >= 400 && distance <= 2000) {
        let travelCost = 0.02 * (distance - 400);
        return travelCost;
    } else {
        return 25;
    } 
}
