//your JS code here. If required.
function secondHighest(arr) {
        //Write your code here
        if (arr.length <= 1) {
          return -Infinity;
        }
        let highest = -Infinity;
        let secondHighest = -Infinity;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
          } else if (arr[i] > secondHighest && arr[i] < highest) {
            secondHighest = arr[i];
          }
        }
        if (highest === secondHighest) {
          return -Infinity;
        }
        return secondHighest;
      }