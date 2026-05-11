"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  let arr = [];
  
  if (d < 0) {
    // Нет корней — возвращаем пустой массив
    arr = [];
  } else if (d === 0) {
    // Один корень
    const root = -b / (2 * a);
    arr = [root];
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [root1, root2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (
    monthlyRate +
    (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1))
  );
  const totalPayment = monthlyPayment * countMonths;
  return parseFloat(totalPayment.toFixed(2));
}