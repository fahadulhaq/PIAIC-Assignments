// Sort an array from smallest to Largest Value 

var numbers =[12,10,15,11,14,13,16];

 var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < numbers.length; i += 1) {
      if (numbers[i - 1] > numbers[i]) {
        done = false;
        var tmp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }

  console.log(numbers);
