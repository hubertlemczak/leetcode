// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const midIdx = Math.floor(arr.length / 2);

//   const left = mergeSort(arr.slice(0, midIdx));
//   const right = mergeSort(arr.slice(midIdx));

//   const sorted = [];

//   if (left[0] < right[0]) {
//     sorted.push(left[0]);
//   } else {
//     sorted.push(right[0]);
//   }

//   return sorted;
//   // find midindex
//   // sort left
//   // if sorted then stop
// }

// console.log(mergeSort([1, 13, 4, 9, 23, 4, 9, 10]));
