var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var depthArray = text.split('\n').map(Number);

function partOne() {
    let increaseCounter = 0;
  
    for (let i = 1; i < depthArray.length; i++) {
      if (depthArray[i] > depthArray[i - 1]) increaseCounter++;
    }
  
    return increaseCounter;
  }
  
  function partTwo(){
      let sumIncreaseCounter = 0;

    for (let i = 2; i < depthArray.length; i++) {
        let firstSet = depthArray[i] + depthArray[i - 1] + depthArray[i - 2];
        let secondSet = depthArray[i + 1] + depthArray[i] + depthArray[i - 1];

        if (secondSet > firstSet) sumIncreaseCounter++;
      }

      return sumIncreaseCounter;
  }

  console.log("PART ONE: " + partOne())
  console.log("PART TWO: " + partTwo())

