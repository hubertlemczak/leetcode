function selectionSort(arr) {
  const sortedArr = arr;

  for (let i = 0; i < sortedArr.length; i++) {
    let smallestNum = sortedArr[i];
    let smallestNumIdx = i;

    for (let j = i; j < sortedArr.length; j++) {
      if (sortedArr[j] < smallestNum) {
        smallestNum = sortedArr[j];
        smallestNumIdx = j;
      }
    }

    sortedArr[smallestNumIdx] = sortedArr[i];
    sortedArr[i] = smallestNum;
  }

  return sortedArr;
}

console.log(selectionSort([5, 4, 1, 67, 2, 5, 5, 732, 5, 534, 6]));
