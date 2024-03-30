// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, 
// negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions.
// If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// ex:
// Input: asteroids = [5,10,-5]
// Output: [5,10]


function asteroidCollision(arr, n) {
    if (n === 0) return arr;

    let stack = [];

    for (let i = 0; i < n; i++) {
        let currentAsteroid = arr[i];

        // Handle collisions
        while (stack.length > 0 && stack[stack.length - 1] > 0 && currentAsteroid < 0) {
            let lastAsteroid = stack.pop();
            if (Math.abs(lastAsteroid) === Math.abs(currentAsteroid)) {
                // Both asteroids annihilate each other
                currentAsteroid = null;
                break;
            } else if (Math.abs(lastAsteroid) > Math.abs(currentAsteroid)) {
                // The last asteroid survives
                currentAsteroid = lastAsteroid;
            }
            // Current asteroid survives
        }
        
        if (currentAsteroid !== null) {
            stack.push(currentAsteroid);
        }
    }

    return stack;
}


function main(){
    let arr = [5,10,-100]
    let n = arr.length 

    let result = asteroidCollision(arr,n)
    console.log(result);
}

main()