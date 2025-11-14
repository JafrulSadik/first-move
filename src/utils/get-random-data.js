export function getRandomItems(array, n) {
  if (n >= array.length) return [...array];

  const result = [];
  const usedIndexes = new Set();

  while (result.length < n) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      result.push(array[randomIndex]);
    }
  }

  return result;
}