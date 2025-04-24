let lengthA = +prompt("Mời bạn nhập vào độ dài cạnh thứ nhất:");
let lengthB = +prompt("Mời bạn nhập vào độ dài cạnh thứ hai:");
let lengthC = +prompt("Mời bạn nhập vào độ dài cạnh thứ ba:");

if (
  lengthA + lengthB > lengthC &&
  lengthA + lengthC > lengthB &&
  lengthC + lengthB > lengthA
) {
  if (
    lengthA ** 2 + lengthB ** 2 === lengthC ** 2 ||
    lengthA ** 2 + lengthC ** 2 === lengthB ** 2 ||
    lengthB ** 2 + lengthC ** 2 === lengthA ** 2
  ) {
    console.log("Đây là tam giác vuông!");
  } else if (lengthA === lengthB && lengthB === lengthC) {
    console.log("Đây là tam giác đều!");
  } else if (
    lengthA === lengthB ||
    lengthB === lengthC ||
    lengthC === lengthA
  ) {
    console.log("Đây là tam giác cân!");
  } else {
    console.log("Đây là tam giác thường!");
  }
} else {
  console.log("Đây không phải độ dài 3 cạnh của 1 tam giác!");
}
