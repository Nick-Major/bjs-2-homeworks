/* function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	let avg = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		} {
			sum = arr[0] += arr[i];
		} {
			avg = sum / arr.length;
			let num = avg.toFixed(2);
			avg = parseFloat(num);
		}

	}

	return {
		min: min,
		max: max,
		avg: avg
	};
} */

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	let num = 0;
	max = Math.max(...arr);
	min = Math.min(...arr);
	sum = arr.reduce((acc, item) => acc + item, 0);
	average = sum / arr.length;
	num = average.toFixed(2);
	avg = parseFloat(num);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	if (arr.some(element => element !== undefined)) {
		return sum;
	} else {
		return 0;
	}


}

function differenceMaxMinWorker(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	if (arr.some(element => element !== undefined)) {
		return max - min;
	} else {
		return 0;
	}


}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			sumEvenElement += arr[i]
		} else {
			sumOddElement += arr[i]
		}
	}

	if (arr.some(element => element !== undefined)) {
		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}

}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}

	}

	if (arr.some(element => element !== undefined)) {
		return sumEvenElement / countEvenElement;
	} else {
		return 0;
	}

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	const result = [];
	result[0] = maxWorkerResult;
	for (let i = 1; i < arrOfArr.length; i++) {
		result.push(func(...arrOfArr[i]));
	}
	let max = Math.max(...result);
	if (max > maxWorkerResult) {
		maxWorkerResult = max;
	}

	return maxWorkerResult;

}
