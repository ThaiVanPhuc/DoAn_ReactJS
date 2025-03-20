export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function dientichhinhvuong(a) {
  return a * a;
}

export function dientichchunhat(a, b) {
  return a * b;
}

export function DThinhTron(r) {
  return Math.PI * r * r;
}

export function giaithua(a) {
  if (a <= 1) return 1;
  return a * giaithua(a - 1);
}

export function nguyento(a) {
  for (let index = 1; index < 10000; index++) {
    for (let i = 2; i <= Math.sqrt(index); i++) {
      if (index % index === 0) {
      }
    }
    console.log(index);
  }
}

function checkNguyento(a) {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
}
