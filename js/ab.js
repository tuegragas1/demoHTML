/*
let n = Number(5);
for (let i = 0; i <= n; i++) {
  document.writeln("The number is " + i + "<br>")
}*/

let a = Number(prompt("Nhap so bat ky "));
let sum = 0;
if (a <= 0) {
  document.writeln("số nhập phải lớn hơn không")
}
else {
  for (let b = 1; b <= a; b++) {
    sum = sum + b;
  }
  document.writeln("The sum of " + a + " is " + sum);
}