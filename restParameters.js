const sum = (...arguments) => {
    // console.log(args)
    let total = 0;
    for (const number of arguments) {
      total += number; // total = total + number
    }
    return total;
  }
  
  let result1 = sum(2, 20, 87)
  let result2 = sum(1, 2, 3, 4, 7, 8)
  
  console.log(result1)
  console.log(result2)