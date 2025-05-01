let num = 1;

function show() {
  console.log('Hello', num);
  num ++;
  if (num <= 3) show();
}

show();
/* output :
Hello 1
Hello 2
Hello 3
 */