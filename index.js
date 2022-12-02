// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs((street-42))
}

function distanceFromHqInFeet(street){
    return (distanceFromHqInBlocks(street)*264)
}

function distanceTravelledInFeet(street1,street2){
    return (Math.abs((street2-street1)*264))
}

function calculatesFarePrice(start,destination){
    if (distanceTravelledInFeet(start,destination)<=400){
        return 0
    } else if (distanceTravelledInFeet(start,destination)>400&&distanceTravelledInFeet(start,destination)<=2000){
        return (distanceTravelledInFeet(start,destination)-400)*0.02
    } else if (distanceTravelledInFeet(start,destination)>2000&&distanceTravelledInFeet(start,destination)<=2500){
        return 25
    } else if (distanceTravelledInFeet(start,destination)>2500){
        return 'cannot travel that far'
    }
}
