let a = [1, 5, 6, 2, 3, 8, 4];
let b = [5, 4, 3, 2, 1];

let maxProfit = function(prices) {
    let result = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] > prices[i - 1];
        }
    }


    return (result);
}

console.log(maxProfit(a));
console.log(maxProfit(b));