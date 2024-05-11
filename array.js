document.getElementById('arrayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const size = parseInt(document.getElementById('arraySize').value);
    const arr = generateArray(size);
    const sortedArr = quickSort([...arr]); // Використовуємо копію масиву для сортування
    document.getElementById('sortedArray').textContent = "Відсортований масив: " + sortedArr.join(', ');

    // const sum = sumBetweenMinAndMax(arr, sortedArr);
    // document.getElementById('sumBetween').textContent = "Сума між мінімальним та максимальним елементом: " + sum;
});

function generateArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [], right = [], equal = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

