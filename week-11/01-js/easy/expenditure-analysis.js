/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var mp = new Map();
  for (var i = 0; i < transactions.length; i++) {
    mp.set(
      transactions[i].category,
      (mp.get(transactions[i].category) || 0) + transactions[i].price
    );
  }
  var ans = [];
  for (let [category, totalSpent] of mp) {
    ans.push({ category: category, totalSpent: totalSpent });
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
