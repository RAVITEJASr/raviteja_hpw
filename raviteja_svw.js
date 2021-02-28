let m = 4;
  let n = 10;
  let a = {
    "Fitbit Plus": 7980,
    IPods: 22349,
    "MI Band": 999,
    "Cult Pass": 2799,
    "Macbook Pro": 229900,
    "Digital Camera": 11101,
    Alexa: 9999,
    "Sandwich Toaster": 2195,
    "Microwave Oven": 9800,
    Scale: 4999,
  };
  let list = [7980, 22349, 999, 2799, 229900, 11101, 9999, 2195, 9800, 4999];
  //sort the prices
  let sorted = [999, 2195, 2799, 4999, 7980, 9800, 9999, 11101, 22349, 229900];

  //not possibl to distribute
  if (m > n) {
    console.log("Not possible");
  } else if (m === n) {
    //distribute all
    console.log(sorted);
  } else {
    //find min sub_array
    let min_index;
    let min_value;
    for (let i = 0; i < n -m+1; i++) {
      let diff = sorted[i + m - 1] - sorted[i];
      console.log(diff, sorted.slice(i, i + m));console.log(min_value);
      if (i === 0) {
        min_index = i;
        min_value = diff;
      } else if (diff < min_value) {
        min_index = i;
        min_value = diff;
      }
    }console.log("the distribution are");
    console.log(min_index, min_value);
    console.log(sorted.slice(min_index, min_index + m));
  }