// There are n cars going to the same destination along a one-lane road. The destination is target miles away.

// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower cars speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

// Return the number of car fleets that will arrive at the destination.

function carFleet(target, position, speed) {
    const n = position.length;
    const cars = [];
    
    for (let i = 0; i < n; i++) {
        cars.push({ position: position[i], time: (target - position[i]) / speed[i] });
    }
    
    cars.sort((a, b) => b.position - a.position);
    
    let fleets = 0;
    let prevTime = 0;
    
    for (const car of cars) {
        if (car.time > prevTime) {
            fleets++;
            prevTime = car.time;
        }
    }
    
    return fleets;
}



function main(){
    let position = [0,2,4]
    let speed = [4,2,1]
    let n = position.length 
    let target = 100

    let result = carFleet(target,position , speed)
    console.log(result);
}
main()