// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];

/**
 * You can use this array to
 * manually test your functions
 */
const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// `filterIncomeTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Returns a new array containing only the income transactions.
// example:
// filterIncomeTransactions(transactions); // => [["income", 1000], ["income", 1500], ["income", 700]]
function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
  // write your code here...
  const newIncomeTransactions = transactions.filter(
    (transaction) => transaction[0] === "income"
  );
  return newIncomeTransactions; // replace empty array with what you see is fit
}

// `filterExpenseTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Return a new array containing only the expense transactions.
// example:
// filterExpenseTransactions(transactions); // => [["expense", 500], ["expense", 300]]
function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
  // write your code here...
  const newExpenseTransactions = transactions.filter(
    (transaction) => transaction[0] === "expense"
  );
  return newExpenseTransactions; // replace empty array with what you see is fit
}

// `calculateTotalIncome` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total income and returns it.
// example:
// calculateTotalIncome(transactions); // => 3200  (1000 + 1500 + 700)
function calculateTotalIncome(transactions: Transaction[]): number {
  // write your code here...
  let totalIncome = 0;
  for (const transaction of transactions) {
    if (transaction[0] === "income") {
      totalIncome += transaction[1];
    }
  }
  return totalIncome; // replace -1 with what you see is fit
}

// `calculateTotalExpenses` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total expense and returns it.
// example:
// calculateTotalExpenses(transactions); // => 800  (500 + 300)
function calculateTotalExpenses(transactions: Transaction[]): number {
  // write your code here...
  let totalExpenses = 0;
  for (const transaction of transactions) {
    if (transaction[0] === "expense") {
      totalExpenses += transaction[1];
    }
  }
  return totalExpenses; // replace -1 with what you see is fit
}

// `calculateNetTotal` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the net total (total income - total expenses) and returns it.
// example:
// calculateNetTotal(transactions); // => 2400  (3200 - 800)
function calculateNetTotal(transactions: Transaction[]): number {
  // write your code here...
  const totalIncome = calculateTotalIncome(transactions);
  const totalExpenses = calculateTotalExpenses(transactions);
  return totalIncome - totalExpenses; // replace -1 with what you see is fit
}

// `filterSignificantTransactions` function that:
// - Accepts 2 parameters:
// - a "transactions" parameter of type "Transaction[]".
// - a "threshold" parameter of type "number"
// - identifies and creates a new array with transactions (both incomes and expenses) above or equal to "threshold".
// example:
// filterSignificantTransactions(transactions, 1000); // =>  [["income", 1000], ["income", 1500]]
function filterSignificantTransactions(
  transactions: Transaction[],
  threshold: number
): Transaction[] {
  // write your code here...
  const newTransactions = transactions.filter(
    (transaction) => transaction[1] >= threshold
  );
  return newTransactions; // replace empty array with what you see is fit
}

export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
