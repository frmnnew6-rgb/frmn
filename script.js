function appendValue(value) {
  const display = document.getElementById("display");
  const current = display.value;
  const operators = ["+", "-", "*", "/", "%"];

  // Cek apakah value yang ditekan adalah operator
  if (operators.includes(value)) {
    // Jika display kosong, jangan izinkan operator
    if (current === "") return;

    // Jika karakter terakhir sudah operator, jangan tambah lagi
    const lastChar = current.slice(-1);
    if (operators.includes(lastChar)) return;
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
