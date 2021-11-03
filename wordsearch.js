const wordSearch = (letters, word) => {
  if (letters === undefined || letters.length === 0 || word === undefined || word === false) {
    return false;
  }
  let reverseWord = word.split('').reverse().join('');
  const horizontalJoin = letters.map(ls => ls.join(''));
  let newMatrix = transpose(letters);
  const verticalJoin = newMatrix.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }
  for (let l of verticalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }
  return false;
};



const transpose = function(matrix) {
  // Put your solution here
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let elementArray = [];
    for (let j = 0; j < matrix.length; j++) {
      //console.log(matrix[i][j]);
      elementArray.push(matrix[j][i]);
    }
    newMatrix.push(elementArray);
  }

  return newMatrix;
};


module.exports = wordSearch;