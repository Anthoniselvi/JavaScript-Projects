document.addEventListener("DOMContentLoaded", function () {
  const salaryInput = document.getElementById("salary");
  const rentInput = document.getElementById("rent");
  const utilitiesInput = document.getElementById("utilities");
  const groceriesInput = document.getElementById("groceries");
  const otherInput = document.getElementById("other");
  const calculateButton = document.getElementById("calculate");
  const totalExpensesDisplay = document.getElementById("totalExpenses");
  const balanceDisplay = document.getElementById("balance");

  calculateButton.addEventListener("click", function () {
    const salary = parseFloat(salaryInput.value) || 0;
    const rent = parseFloat(rentInput.value) || 0;
    const utilities = parseFloat(utilitiesInput.value) || 0;
    const groceries = parseFloat(groceriesInput.value) || 0;
    const other = parseFloat(otherInput.value) || 0;

    const totalExpenses = rent + utilities + groceries + other;
    const balance = salary - totalExpenses;

    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    balanceDisplay.textContent = balance.toFixed(2);
  });
});
