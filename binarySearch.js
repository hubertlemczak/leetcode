function binarySearch(arr, target) {
  if (arr.length === 1) {
    return arr[0] === target;
  }

  const middleIndex = Math.floor(arr.length / 2);

  if (arr[middleIndex] === target) {
    return true;
  }

  if (target < arr[middleIndex]) {
    const leftSide = arr.slice(0, middleIndex);
    return binarySearch(leftSide, target);
  }

  if (target > arr[middleIndex]) {
    const rightSide = arr.slice(middleIndex + 1);
    return binarySearch(rightSide, target);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));