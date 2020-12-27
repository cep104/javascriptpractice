let dataOne = [17, 21, 23];
let dataTwo = [12, 5, -5, 0, 4];

const printForecast = function (dataArray) {
  let fullArray = [];
  for (i = 0; i < dataArray.length; i++) {
    if (i === 0) {
      fullArray.push(`${dataArray[i]}C in ${i + 1} day... `);
    } else {
      fullArray.push(`${dataArray[i]}C in ${i + 1} days... `);
    }
  }
  console.log(fullArray.join(""));
};

printForecast(dataOne);
printForecast(dataTwo);
