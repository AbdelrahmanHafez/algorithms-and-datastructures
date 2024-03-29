// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk (array, size) {
//   const chunks = [];

//   while (array.length > size) {
//     chunks.push(array.splice(0, size));
//   }

//   chunks.push(array);

//   return chunks;
// }

// function chunk (array, size) {
//   const chunks = [];

//   array.forEach((item) => {
//     const lastChunk = chunks[chunks.length - 1];
//     if (!lastChunk || lastChunk.length === size) return chunks.push([item]);
//     return lastChunk.push(item);
//   });


//   return chunks;
// }

function chunk (array, size) {
  const chunks = [];

  for (let currentIndex = 0; currentIndex < array.length; currentIndex += size) {
    chunks.push(array.slice(currentIndex, currentIndex + size));
  }

  return chunks;
}

module.exports = chunk;