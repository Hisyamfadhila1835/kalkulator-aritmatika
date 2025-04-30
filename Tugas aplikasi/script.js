function hitung(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let hasil = 0;
  
    switch (operator) {
      case '+':
        hasil = num1 + num2;
        break;
      case '-':
        hasil = num1 - num2;
        break;
      case '*':
        hasil = num1 * num2;
        break;
      case '/':
        hasil = num2 !== 0 ? num1 / num2 : 'Error (bagi 0)';
        break;
      case '%':
        hasil = num2 !== 0 ? num1 % num2 : 'Error (bagi 0)';
        break;
    }
  
    document.getElementById('hasil').textContent = hasil;
  }
  