let numberA = +prompt("Mời bạn nhập vào số a");
let numberB = +prompt("Mời bạn nhập vào số b");
let operation = prompt("Mời bạn nhập các phép tính (+, -, *, /)");
let result;

switch (operation) {
  case "+":
    result = numberA + numberB;
    break;
  case "-":
    result = numberA - numberB;
    break;
  case "*":
    result = numberA * numberB;
    break;
  case "/":
    if (numberB !== 0) {
      result = numberA / numberB;
    } else {
      alert("Không thể chia cho 0!");
      result = null;
    }
    break;
  default:
    alert("Phép tính không hợp lệ!");
    result = null;
}

if (result !== null) {
  alert(
    `Kết quả của phép tính trên: ${numberA} ${operation} ${numberB} = ${result}`
  );
}
