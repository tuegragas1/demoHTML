/*
let n = Number(5);
for (let i = 0; i <= n; i++) {
  document.writeln("The number is " + i + "<br>")
}*/
/*
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
*/
/*
let n = Number(prompt("nhap so vao hop thoai "));
let sum = 0;
while (n != -1) {
  sum = n + sum;
  document.writeln("So da nhap " + n + "<br>");
  n = Number(prompt("nhap so vao hop thoai "));
}
document.writeln("tong cac so la" + sum);

/*
let i = 1;
while (i <= 100) {
  document.writeln("<hr width= '" + i + "%'><br>");
  i++;
}*/
let sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
let hang = Number(1);
let cot = Number(1);
for (hang = 1; hang <= 10; hang++) {
  sout += "<tr>";
  for (cot = 1; cot <= 10; cot++) {
    sout += "<td>" + hang * cot + "</td>";
  }
  sout += "</tr>";
}
sout += "</table>";
document.writeln(sout);