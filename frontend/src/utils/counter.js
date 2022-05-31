const countOccurrences = (arr, status) => {
  return arr.reduce((counter, obj) => {
    if (obj.status === status) counter += 1;
    return counter;
  }, 0);
};
export default countOccurrences;
