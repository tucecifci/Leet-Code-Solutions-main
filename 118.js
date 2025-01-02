var generate = function (numRows) {
  const triangle = []; //pascal üçgenini tutacak liste

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle.push(row);
  }
  return triangle;
};
