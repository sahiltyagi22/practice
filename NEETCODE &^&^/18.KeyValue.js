// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.

// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.

// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".


// brute approach  0(n)

class keyValue{
    constructor(){
        this.map = new Map()
    }

    setValues(key, value, timestamp){
        let element = [value, timestamp]

        if(this.map.has(key)){
            map.set(key , map.get(key).push(element))
        }else{
            map.set(key , [element])
        }
    }

    getValues(key, timestamp){

        let value = ""

        if(map.has(key)){
           let values =  map.get(key)

           for(let i=0; i<values.length; i++){
            if(values[1] <= timestamp){
                    value = values[0] 
            }
           }
        }

        return value
    }
}



// Better Approach (using binary search)
class keyValue{
    constructor(){
        this.map = new Map()
    }

    setValues(key, value, timestamp){
        let element = [value, timestamp]

        if(this.map.has(key)){
            map.set(key , map.get(key).push(element))
        }else{
            map.set(key , [element])
        }
    }

    getValues(key, timestamp){

       
            if (!this.map.has(key)) {
                return "";
            }
    
            const values = this.map.get(key);
            let left = 0;
            let right = values.length - 1;
    
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (values[mid].timestamp === timestamp) {
                    return values[mid].value;
                } else if (values[mid].timestamp < timestamp) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
    
            if (right < 0) {
                return "";
            } else {
                return values[right].value;
            }
        }
    }



