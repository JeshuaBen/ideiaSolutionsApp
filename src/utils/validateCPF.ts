export function validateCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, "");
  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < 9; i++) {
    sum1 += parseInt(cpf.charAt(i)) * (10 - i);
    sum2 += parseInt(cpf.charAt(i)) * (11 - i);
  }

  const digit1 = (sum1 * 10) % 11;
  const digit2 = (sum2 * 10) % 11;

  if (digit1 === 10) {
    if (parseInt(cpf.charAt(9)) !== 0) {
      return false;
    }
  } else if (parseInt(cpf.charAt(9)) !== digit1) {
    return false;
  }

  if (digit2 === 10) {
    if (parseInt(cpf.charAt(10)) !== 0) {
      return false;
    }
  } else if (parseInt(cpf.charAt(10)) !== digit2) {
    return false;
  }

  return true;
}
