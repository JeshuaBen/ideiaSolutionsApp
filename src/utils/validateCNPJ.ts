export function validateCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, "");

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1{13}$/.test(cnpj)) {
    return false;
  }

  let sum1 = 0;
  for (let i = 0; i < 12; i++) {
    sum1 += parseInt(cnpj.charAt(i)) * (5 - (i % 4));
  }
  sum1 = 11 - (sum1 % 11);
  const digit1 = sum1 >= 10 ? 0 : sum1;

  let sum2 = 0;
  for (let i = 0; i < 13; i++) {
    sum2 += parseInt(cnpj.charAt(i)) * (6 - (i % 4));
  }
  sum2 = 11 - (sum2 % 11);
  const digit2 = sum2 >= 10 ? 0 : sum2;

  return (
    parseInt(cnpj.charAt(12)) === digit1 && parseInt(cnpj.charAt(13)) === digit2
  );
}
