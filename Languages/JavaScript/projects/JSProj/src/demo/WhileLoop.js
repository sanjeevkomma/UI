let i = 1;
while (i <= 5) {
  console.log('while', i);
  i++;
}

let j = 6;
do {
  console.log('do while', j);
  j++;
} while (j <= 5);

let num = 587432;
while(num > 0){
  console.log(num % 10); // It prints reminder
  num = parseInt(num / 10);
}
