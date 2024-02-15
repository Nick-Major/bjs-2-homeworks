"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (discriminant > 0) {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent / 100) / 12;
	let s = amount - contribution;
	let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let total = payment * countMonths + contribution;
	let result = (total).toFixed(2);
	let number = parseFloat(result);
	return number;
}