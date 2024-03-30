// You are an owner of lemonade island, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time
// (in the order specified by given array bills[]). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
//  You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

function brute(bills, n) {
    let bill5 = 0;
    let bill10 = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            bill5++;
        } else if (bills[i] === 10) {
            if (bill5 === 0) {
                return false; // Cannot provide change
            }
            bill5--;
            bill10++;
        } else { // bills[i] === 20
            if (bill10 > 0 && bill5 > 0) {
                bill10--;
                bill5--;
            } else if (bill5 >= 3) {
                bill5 -= 3;
            } else {
                return false; // Cannot provide change
            }
        }
    }
    return true;
}


function main(){
    let bills = [5, 5, 10, 10, 20]
    let n = bills.length 

    let result = brute(bills, n)
    console.log(result);
}
main()
