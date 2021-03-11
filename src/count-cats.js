const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for(let i = 0; i<matrix.length;i++){
    for(let a = 0; a<matrix[i].length;a++){
      if (matrix[i][a] === "^^"){
          result++
      }
    }
  }
    return result;
};
